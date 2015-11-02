package routers

import (
	"time"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	utilFunc "xtremepay.com/backoffice/utility"

	controllers "xtremepay.com/backoffice/controllers"
	base "xtremepay.com/backoffice/models"
	utilmodels "xtremepay.com/backoffice/models/util"
)

// Utility ... The merchant service definition struct
type Utility struct {
	Db *gorm.DB
}

// Routing ... list of routing services
func (c Utility) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", Createdat: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	personController := controllers.PersonController{c.Db, baseModel, httpUtilFunc}
	utilController := controllers.CommonController{c.Db, baseModel, httpUtilFunc}
	// Person url mappings
	router.HandleFunc(apiprefix+"/person", personController.CreatePerson).Methods("POST")
	router.HandleFunc(apiprefix+"/address", personController.CreateAddress).Methods("POST")
	router.HandleFunc(apiprefix+"/contact", personController.CreateContact).Methods("POST")
	router.HandleFunc(apiprefix+"/personidtype", personController.CreatePersonIDType).Methods("POST")

	router.HandleFunc(apiprefix+"/person/search", personController.SearchPersonGeneric).Methods("POST")
	router.HandleFunc(apiprefix+"/address/search", personController.SearchAddressGeneric).Methods("POST")
	router.HandleFunc(apiprefix+"/contact/search", personController.SearchContactGeneric).Methods("POST")

	router.HandleFunc(apiprefix+"/person/{person_id}/addresses", personController.FetchPersonAddresses).Methods("GET")
	router.HandleFunc(apiprefix+"/person/{person_id}/contacts", personController.FetchPersonContacts).Methods("GET")
	router.HandleFunc(apiprefix+"/person/{person_id}/ids", personController.FetchPersonIDs).Methods("GET")

	//router.HandleFunc(apiprefix+"/person/search", personController.Create).Methods("POST")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Show).Methods("GET")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Update).Methods("PUT", "PATCH")
	//router.HandleFunc(apiprefix+"/person", personController.Index).Methods("GET")
	//router.HandleFunc(apiprefix+"/person/{id}", personController.Delete).Methods("DELETE")
	//router.HandleFunc(apiprefix+"/person/{id}", utilController.Delete).Methods("DELETE")

	// Country, Region and Town routes
	router.HandleFunc(apiprefix+"/country", utilController.CreateCountry).Methods("POST")
	router.HandleFunc(apiprefix+"/region", utilController.CreateRegion).Methods("POST")
	router.HandleFunc(apiprefix+"/town", utilController.CreateTown).Methods("POST")
	router.HandleFunc(apiprefix+"/country/{search}", utilController.SearchCountryGeneric).Methods("POST")
	router.HandleFunc(apiprefix+"/region/{search}", utilController.SearchRegionStateGeneric).Methods("POST")
	router.HandleFunc(apiprefix+"/town/{search}", utilController.SearchTown).Methods("POST")
	router.HandleFunc(apiprefix+"/country/{country_id}/regions", utilController.FetchCountryRegion).Methods("GET")
	router.HandleFunc(apiprefix+"/country/{country_code}/regions", utilController.FetchCountryRegion).Methods("GET")
	router.HandleFunc(apiprefix+"/country/{country_id}/region/{region_id}/towns", utilController.FetchRegionTowns).Methods("GET")
	router.HandleFunc(apiprefix+"/country/{id}", utilController.ShowCountry).Methods("GET")
	router.HandleFunc(apiprefix+"/countries", utilController.FetchAllCountries).Methods("GET")
	router.HandleFunc(apiprefix+"/country/{id}", utilController.UpdateCountry).Methods("PUT", "PATCH")
	router.HandleFunc(apiprefix+"/region/{id}", utilController.UpdateRegion).Methods("PUT", "PATCH")
	router.HandleFunc(apiprefix+"/town/{id}", utilController.UpdateTown).Methods("PUT", "PATCH")
	router.HandleFunc(apiprefix+"/token-auth", controllers.Login).Methods("POST")

}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c Utility) MigrateDB() {

	c.Db.AutoMigrate(&utilmodels.Country{}, &utilmodels.RegionState{}, &utilmodels.Addresses{}, &utilmodels.Contacts{}, &utilmodels.Person{}, &utilmodels.IDType{},
		&utilmodels.PersonIDType{}, &utilmodels.CompanyEntities{}, &utilmodels.Towns{}, &utilmodels.Currency{}, &utilmodels.User{})
	c.Db.Model(&utilmodels.RegionState{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Currency{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Towns{}).AddForeignKey("region_state_id", "xtut_region_state(id)", "RESTRICT", "RESTRICT")

	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("country_id", "xtut_country(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("towns_id", "xtut_town(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&utilmodels.Addresses{}).AddForeignKey("company_entities_id", "xtut_company_entities(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.Contacts{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.PersonIDType{}).AddForeignKey("id_type", "xtut_id_type(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.User{}).AddForeignKey("person_id", "xtut_person(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&utilmodels.Contacts{}).AddForeignKey("company_entities_id", "xtut_company_entities(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&utilmodels.RegionState{}).AddUniqueIndex("idx_region_state_country_id_name", "country_id", "name")
	c.Db.Model(&utilmodels.Towns{}).AddUniqueIndex("idx_town_region_id_name", "region_state_id", "name")
	c.Db.Model(&utilmodels.Currency{}).AddUniqueIndex("idx_currency_country_id_name", "country_id", "name")
	c.Db.Model(&utilmodels.IDType{}).AddUniqueIndex("idx_id_type_name_issued_by", "name", "issue_by")
	//c.Db.Model(&utilmodels.PersonIDType{}).AddForeignKey("id_number", "xtut_person_id_type(id)", "RESTRICT", "RESTRICT")

	c.Db.Model(&utilmodels.Person{}).AddUniqueIndex("idx_firstname_lastname_middlename_dob", "last_name", "first_name", "middle_name", "date_of_birth")
	//TownsID

}
