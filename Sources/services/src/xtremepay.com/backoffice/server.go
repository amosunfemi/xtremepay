package main

import (
	"fmt"
	"os"

	"github.com/albrow/negroni-json-recovery"
	"github.com/codegangsta/negroni"
	"github.com/goincremental/negroni-sessions"
	"github.com/goincremental/negroni-sessions/cookiestore"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"github.com/spf13/viper"
	"xtremepay.com/backoffice/routers"
	"xtremepay.com/backoffice/utility"
)

//ServiceManager ... The main service coordinator
type ServiceManager struct {
	Router        *mux.Router
	NegroniServer *negroni.Negroni
	ViperConfig   *viper.Viper
	Cors          *cors.Cors
}

var env = "config_utility.json"

func main() {
	env = os.Getenv("XTREMEPAY_SERVICE")
	router := mux.NewRouter()
	n := negroni.New(negroni.NewLogger())
	viperConfig := viper.New()

	store := cookiestore.New([]byte("secret123"))
	n.Use(sessions.Sessions("my_session", store))

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
	})

	serviceManager := ServiceManager{router, n, viperConfig, c}
	serviceManager.LoadConfig(env)
	serviceManager.LoadService()

}

// LoadConfig ... Read configuration file and load the detail
func (c ServiceManager) LoadConfig(configFile string) {
	dir, _ := os.Getwd()
	fmt.Println(dir + "/" + configFile)
	c.ViperConfig.SetConfigType("json")
	c.ViperConfig.SetConfigName("config")
	c.ViperConfig.SetConfigFile(dir + "/" + configFile)

	c.ViperConfig.AddConfigPath("$HOME")
	err := c.ViperConfig.ReadInConfig()

	if err != nil {
		fmt.Println(err.Error())
	}

}

// LoadService ... This start any service based on the details read from the configuration file
/*
To load client service you dont need a data store.
*/
func (c ServiceManager) LoadService() string {
	serviceMode := c.ViperConfig.GetString("service.mode")
	serviceName := c.ViperConfig.GetString("service.name")
	apiPrefix := c.ViperConfig.GetString("service.apiprefix")
	dataStore := new(utility.DataStore)
	logManager := new(utility.LogManager)
	logDetail := c.ViperConfig.GetStringMap("service.log")
	apiServices := c.ViperConfig.GetStringMapString("service.api_services")
	if serviceName != "client" {
		dbDetail := c.ViperConfig.GetStringMap(fmt.Sprintf("service.datastore.%s", serviceMode))
		dataStore.InitDataStore(dbDetail["storetype"].(string), dbDetail, logManager.Logger)
	}

	port := c.ViperConfig.GetInt("service.port")

	logManager.LogContext = logDetail["context"].(string)
	logManager.ErrorFile = logDetail["error_file"].(string)
	logManager.InfoFile = logDetail["info_file"].(string)
	logManager.DebugFile = logDetail["debug_file"].(string)
	logManager.InitLog()

	//routeList := []map[string]interface{}{}
	switch serviceName {
	case "client":
		fmt.Println(apiServices)
		clientService := routers.ClientRouter{apiServices, logManager}
		clientService.Routing(c.Router, apiPrefix)
		c.NegroniServer.Use(recovery.JSONRecovery(true))
		c.NegroniServer.Use(c.Cors)
		c.NegroniServer.UseHandler(c.Router)
		logManager.Logger.Info("Client Service Started ")
		c.NegroniServer.Run(fmt.Sprintf(":%d", port))
		return "Client Service Started"

	case "merchant":

		merchantService := routers.MerchantRouter{*dataStore}
		merchantService.MigrateDB()
		merchantService.Routing(c.Router, apiPrefix)
		c.NegroniServer.Use(recovery.JSONRecovery(true))
		c.NegroniServer.Use(c.Cors)
		c.NegroniServer.UseHandler(c.Router)
		logManager.Logger.Info("Merchant Service Started ")
		c.NegroniServer.Run(fmt.Sprintf(":%d", port))
		return "Merchant Service Started"

	case "utility":

		//if Err == nil {
		utilityService := routers.UtilityRouter{*dataStore, logManager}
		utilityService.MigrateDB()
		utilityService.Routing(c.Router, apiPrefix)
		c.NegroniServer.Use(recovery.JSONRecovery(true))
		c.NegroniServer.Use(c.Cors)
		c.NegroniServer.UseHandler(c.Router)
		logManager.Logger.Info("Utility Service Started ")
		c.NegroniServer.Run(fmt.Sprintf(":%d", port))
		return "Utility Service Started"

	case "security":

		//if Err == nil {
		userService := routers.UserRouter{*dataStore}
		userService.MigrateDB()
		userService.Routing(c.Router, apiPrefix)
		c.NegroniServer.Use(recovery.JSONRecovery(true))
		c.NegroniServer.Use(c.Cors)
		c.NegroniServer.UseHandler(c.Router)
		logManager.Logger.Info("Security Service Started ")
		c.NegroniServer.Run(fmt.Sprintf(":%d", port))
		return "Security Service Started"

	case "accounting":

		//if Err == nil {
		userService := routers.AccountRouter{*dataStore}
		//dataStore.RDBMS.InitSchema()
		userService.MigrateDB()
		userService.Routing(c.Router, apiPrefix)
		c.NegroniServer.Use(recovery.JSONRecovery(true))
		c.NegroniServer.Use(c.Cors)
		c.NegroniServer.UseHandler(c.Router)
		logManager.Logger.Info("Accounting Service Started ")
		c.NegroniServer.Run(fmt.Sprintf(":%d", port))
		return "Accounting Service Started"

	default:
		fmt.Println("No Microservice configured")
		return "service failedd"
	}

}
