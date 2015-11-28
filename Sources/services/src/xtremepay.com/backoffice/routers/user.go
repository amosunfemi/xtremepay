package routers

import (
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"xtremepay.com/backoffice/security/core/authentication"
	utilFunc "xtremepay.com/backoffice/utility"

	controllers "xtremepay.com/backoffice/controllers"
	base "xtremepay.com/backoffice/models"
	utilmodels "xtremepay.com/backoffice/models/util"
)

// UserRouter ... The merchant service definition struct
type UserRouter struct {
	Db *gorm.DB
}

// Routing ... list of routing services
func (c UserRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", Createdat: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	userController := controllers.UserController{c.Db, baseModel, httpUtilFunc}
	securityController := controllers.SecurityController{c.Db, baseModel, httpUtilFunc}
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
	c.Db.AutoMigrate(&utilmodels.User{})
	c.Db.Model(&utilmodels.User{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.User{}).AddUniqueIndex("idx_username", "username")
	c.Db.Model(&utilmodels.User{}).AddUniqueIndex("idx_email", "email")
}
