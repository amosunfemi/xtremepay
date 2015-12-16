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

// Utility ... The merchant service definition struct
type UtilityRouter struct {
	Db *gorm.DB
}

// Routing ... list of routing services
func (c UtilityRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", Createdat: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	personController := controllers.PersonController{c.Db, baseModel, httpUtilFunc}
	utilController := controllers.CommonController{c.Db, baseModel, httpUtilFunc}
	// Person url mappings
	router.Handle(apiprefix+"/person",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.CreatePerson),
		)).Methods("POST")
	router.Handle(apiprefix+"/address",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.CreateAddress),
		)).Methods("POST")
	router.Handle(apiprefix+"/contact",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.CreateContact),
		)).Methods("POST")
	router.Handle(apiprefix+"/personidtype",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.CreatePersonIDType),
		)).Methods("POST")

	router.Handle(apiprefix+"/person/search",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.SearchPersonGeneric),
		)).Methods("POST")
	router.Handle(apiprefix+"/address/search",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.SearchAddressGeneric),
		)).Methods("POST")
	router.Handle(apiprefix+"/contact/search",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.SearchContactGeneric),
		)).Methods("POST")

	router.Handle(apiprefix+"/person/{person_id}/addresses",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.FetchPersonAddresses),
		)).Methods("GET")
	router.Handle(apiprefix+"/person/{person_id}/contacts",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.FetchPersonContacts),
		)).Methods("GET")
	router.Handle(apiprefix+"/person/{person_id}/ids",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(personController.FetchPersonIDs),
		)).Methods("GET")

	//router.HandleFunc(apiprefix+"/person/search", personController.Create).Methods("POST")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Show).Methods("GET")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Update).Methods("PUT", "PATCH")
	//router.HandleFunc(apiprefix+"/person", personController.Index).Methods("GET")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Delete).Methods("DELETE")
	//router.HandleFunc(apiprefix+"/person/{id}", utilController.Delete).Methods("DELETE")

	// Country, Region and Town routes
	router.Handle(apiprefix+"/country",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.CreateCountry),
		)).Methods("POST")
	router.Handle(apiprefix+"/region",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.CreateRegion),
		)).Methods("POST")
	router.Handle(apiprefix+"/town",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.CreateTown),
		)).Methods("POST")
	router.Handle(apiprefix+"/country/{search}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.SearchCountryGeneric),
		)).Methods("POST")
	router.Handle(apiprefix+"/region/{search}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.SearchRegionStateGeneric),
		)).Methods("POST")
	router.Handle(apiprefix+"/town/{search}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.SearchTown),
		)).Methods("POST")
	router.Handle(apiprefix+"/country/{country_id}/regions",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.FetchCountryRegion),
		)).Methods("GET")
	router.Handle(apiprefix+"/country/{country_code}/regions",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.FetchCountryRegion),
		)).Methods("GET")
	router.Handle(apiprefix+"/country/{country_id}/region/{region_id}/towns",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.FetchRegionTowns),
		)).Methods("GET")
	router.Handle(apiprefix+"/country/{id}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.ShowCountry),
		)).Methods("GET")
	router.Handle(apiprefix+"/countries",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.FetchAllCountries),
		)).Methods("GET")
	router.Handle(apiprefix+"/country/{id}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.UpdateCountry),
		)).Methods("PUT", "PATCH")
	router.Handle(apiprefix+"/region/{id}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.UpdateRegion),
		)).Methods("PUT", "PATCH")
	router.Handle(apiprefix+"/town/{id}",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(utilController.UpdateTown),
		)).Methods("PUT", "PATCH")
	//router.HandleFunc(apiprefix+"/token-auth", controllers.Login).Methods("POST")

	router.Handle(apiprefix+"/logout",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(controllers.Logout),
		)).Methods("GET")

}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c UtilityRouter) MigrateDB() {

	c.Db.AutoMigrate(&utilmodels.Country{}, &utilmodels.RegionState{}, &utilmodels.Addresses{}, &utilmodels.Contacts{}, &utilmodels.Person{}, &utilmodels.IDType{},
		&utilmodels.PersonIDType{}, &utilmodels.CompanyEntities{}, &utilmodels.Towns{}, &utilmodels.Currency{}, &utilmodels.User{}, &utilmodels.Language{})
	c.Db.Model(&utilmodels.RegionState{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Currency{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Towns{}).AddForeignKey("region_state_id", "xtut_region_state(id)", "RESTRICT", "RESTRICT")

	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("towns_id", "xtut_town(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Contacts{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.PersonIDType{}).AddForeignKey("id_type", "xtut_id_type(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.User{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Country{}).AddForeignKey("language_id", "xtut_language(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&utilmodels.Contacts{}).AddForeignKey("company_entities_id", "xtut_company_entities(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.RegionState{}).AddUniqueIndex("idx_region_state_country_id_name", "country_id", "name")
	c.Db.Model(&utilmodels.Towns{}).AddUniqueIndex("idx_town_region_id_name", "region_state_id", "name")
	c.Db.Model(&utilmodels.Currency{}).AddUniqueIndex("idx_currency_country_id_name", "country_id", "name")
	c.Db.Model(&utilmodels.IDType{}).AddUniqueIndex("idx_id_type_name_issued_by", "name", "issue_by")
	//c.Db.Model(&utilmodels.PersonIDType{}).AddForeignKey("id_number", "xtut_person_id_type(id)", "RESTRICT", "RESTRICT")

	c.Db.Model(&utilmodels.Person{}).AddUniqueIndex("idx_firstname_lastname_middlename_dob", "last_name", "first_name", "middle_name", "date_of_birth")
	//TownsID

}
