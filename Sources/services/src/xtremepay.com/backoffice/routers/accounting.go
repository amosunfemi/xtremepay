/*
Account route. Account Microservice RESTful service defintion.
*/

package routers

import (
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	controllers "xtremepay.com/backoffice/controllers"
	base "xtremepay.com/backoffice/models"
	utilmodels "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/security/core/authentication"
	utilFunc "xtremepay.com/backoffice/utility"
	//utilmodels "xtremepay.com/backoffice/models/util"
)

// AccountRouter ... The accounting services definition, customer, account etc
type AccountRouter struct {
	//BaseRouter BaseRouter
	DataStore utilFunc.DataStore
	//Db        *gorm.DB
	//RouteList []map[string]interface{}
}

// Routing ... list of routing services
func (c AccountRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", CreatedAt: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	account := controllers.AccountController{c.DataStore, baseModel, httpUtilFunc}

	router.Handle(apiprefix+"/accounts",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(account.CreateAccount),
		)).Methods("POST")

	router.Handle(apiprefix+"/account/categories",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(account.CreateAccount),
		)).Methods("POST")

	router.Handle(apiprefix+"/account/fundsource",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(account.CreateAccountCategory),
		)).Methods("POST")

	router.Handle(apiprefix+"/account/limit",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(account.CreateAccountLimit),
		)).Methods("POST")
	router.Handle(apiprefix+"/account/funding",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(account.CreateAccountFundMapping),
		)).Methods("POST")

}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c AccountRouter) MigrateDB() {
	modelArray := []interface{}{utilmodels.Account{}}
	for _, model := range modelArray {
		//fmt.Println(model)
		c.DataStore.InitSchema(model)
	}
	//c.DataStore.InitSchema(modelArray)
	//c.DataStore.InitSchema(&utilmodels.Account{}) //, &utilmodels.AccountCategory{}, &utilmodels.AccountFundSource{}, &utilmodels.AccountLimit{}, &utilmodels.Customer{},
	//&utilmodels.CustomerType{})

}
