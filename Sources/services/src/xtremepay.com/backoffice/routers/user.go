/*
User route. User Management Microservice RESTful service defintion.
*/

package routers

import (
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"xtremepay.com/backoffice/security/core/authentication"
	utilFunc "xtremepay.com/backoffice/utility"

	controllers "xtremepay.com/backoffice/controllers"
	base "xtremepay.com/backoffice/models"
	utilmodels "xtremepay.com/backoffice/models/util"
)

// UserRouter ... The merchant service definition struct
type UserRouter struct {
	DataStore utilFunc.DataStore
}

// Routing ... list of routing services
func (c UserRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", CreatedAt: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	userController := controllers.UserController{baseModel, httpUtilFunc, c.DataStore}
	securityController := controllers.SecurityController{baseModel, c.DataStore, httpUtilFunc}
	// User url mappings
	router.HandleFunc(apiprefix+"/user", userController.CreateUser).Methods("POST")
	router.HandleFunc(apiprefix+"/token-auth", securityController.Login).Methods("POST")
	router.Handle(apiprefix+"/refresh-token-auth",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.RefreshToken),
		)).Methods("GET")
	router.Handle(apiprefix+"/logout",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.Logout),
		)).Methods("GET")

}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c UserRouter) MigrateDB() {
	//modelArray := []interface{}{utilmodels.User{}, utilmodels.PersonUser{}}
	c.DataStore.InitSchema(&utilmodels.PersonUser{})
	c.DataStore.InitSchema(&utilmodels.User{})
	//c.DataStore.InitSchema(utilmodels.PersonUser{})

	//c.DataStore.InitSchema(modelArray)

	//c.Db.Model(&utilmodels.User{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&utilmodels.User{}).AddUniqueIndex("idx_username", "username")
	//c.Db.Model(&utilmodels.User{}).AddUniqueIndex("idx_email", "email")
}
