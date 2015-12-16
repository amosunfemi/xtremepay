package main

import (
	"fmt"
	"os"

	"errors"

	"github.com/albrow/negroni-json-recovery"
	"github.com/codegangsta/negroni"
	"github.com/goincremental/negroni-sessions"
	"github.com/goincremental/negroni-sessions/cookiestore"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/rs/cors"
	"github.com/spf13/viper"
	"xtremepay.com/backoffice/routers"
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
		AllowedOrigins: []string{"http://foo.com"},
	})

	serviceManager := ServiceManager{router, n, viperConfig, c}
	serviceManager.LoadConfig(env)
	serviceManager.LoadService()

}

// LoadConfig ... Read configuration file and load the detail
func (c ServiceManager) LoadConfig(configFile string) {
	dir, _ := os.Getwd()

	c.ViperConfig.SetConfigType("json")
	c.ViperConfig.SetConfigName("config")
	c.ViperConfig.SetConfigFile(dir + "/" + configFile)

	c.ViperConfig.AddConfigPath("$HOME")
	err := c.ViperConfig.ReadInConfig()

	if err != nil {
		fmt.Println(err.Error())
	}

}

// InitDB ...Use the details in the dbconndetails to create db connection
func (c ServiceManager) InitDB(dbconndetails map[string]string) (gorm.DB, error) {
	var err error
	connStr := fmt.Sprintf("user=%s dbname=%s password=%s sslmode=disable",
		dbconndetails["user"], dbconndetails["database"], dbconndetails["password"])
	db, err := gorm.Open("postgres", connStr)
	db.LogMode(true)
	if err != nil {
		err = errors.New(err.Error())
		return db, err
	}
	return db, nil
}

// LoadService ... This start any service based on the details read from
func (c ServiceManager) LoadService() string {
	serviceMode := c.ViperConfig.GetString("service.mode")
	serviceName := c.ViperConfig.GetString("service.name")
	apiPrefix := c.ViperConfig.GetString("service.apiprefix")
	dbDetail := c.ViperConfig.GetStringMapString(fmt.Sprintf("service.datastore.%s", serviceMode))
	port := c.ViperConfig.GetInt("service.port")

	switch serviceName {
	case "merchant":

		db, Err := c.InitDB(dbDetail)
		if Err == nil {
			merchantService := routers.MerchantRouter{&db}
			merchantService.MigrateDB()
			merchantService.Routing(c.Router, apiPrefix)
			c.NegroniServer.Use(recovery.JSONRecovery(true))
			c.NegroniServer.Use(c.Cors)
			c.NegroniServer.UseHandler(c.Router)
			c.NegroniServer.Run(fmt.Sprintf(":%d", port))
			return "Merchant Service Started"
		} else {
			fmt.Println(Err.Error())
			return Err.Error()
		}

	case "utility":

		db, Err := c.InitDB(dbDetail)
		if Err == nil {
			utilityService := routers.UtilityRouter{&db}
			utilityService.MigrateDB()
			utilityService.Routing(c.Router, apiPrefix)
			c.NegroniServer.Use(recovery.JSONRecovery(true))
			c.NegroniServer.Use(c.Cors)
			c.NegroniServer.UseHandler(c.Router)
			c.NegroniServer.Run(fmt.Sprintf(":%d", port))
			return "Utility Service Started"
		} else {
			fmt.Println(Err.Error())
			return Err.Error()
		}

	case "security":

		db, Err := c.InitDB(dbDetail)
		if Err == nil {
			userService := routers.UserRouter{&db}
			userService.MigrateDB()
			userService.Routing(c.Router, apiPrefix)
			c.NegroniServer.Use(recovery.JSONRecovery(true))
			c.NegroniServer.Use(c.Cors)
			c.NegroniServer.UseHandler(c.Router)
			c.NegroniServer.Run(fmt.Sprintf(":%d", port))

			return "Security Service Started"
		} else {
			fmt.Println(Err.Error())
			return Err.Error()
		}

	default:
		fmt.Println("No Microservice configured")
		return "service failedd"
	}

}
