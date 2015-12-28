package controllers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//CommonController ...
type CommonController struct {
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
	DataStore    utility.DataStore
}

// CreateLanguage ... create new language
func (c CommonController) CreateLanguage(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	language := new(models.Language)
	errs := binding.Bind(req, language)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := language.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database
	p := models.Language{c.BaseModel, language.ISOCode, language.Name}

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// CreateCountry ... create new country
func (c CommonController) CreateCountry(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	country := new(models.Country)
	errs := binding.Bind(req, country)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := country.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database
	p := models.Country{c.BaseModel, country.ISOCode, country.Name, country.RegionStates, country.Language, country.LanguageID}

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		fmt.Println(err.Error())
		panic(err)
	} else {
		r.JSON(res, 200, p)
	}

	// render response

}

// CreateRegion ... create new region
func (c CommonController) CreateRegion(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	region := new(models.RegionState)
	errs := binding.Bind(req, region)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := region.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	// save to database
	p := models.RegionState{c.BaseModel, region.Name, region.CountryID, region.Towns}

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// CreateTown ... create new merchant
func (c CommonController) CreateTown(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	town := new(models.Towns)
	errs := binding.Bind(req, town)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := town.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database
	p := models.Towns{c.BaseModel, town.RegionStateID, town.Name}

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// UpdateCountry ... update a merchant by id
func (c CommonController) UpdateCountry(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	country := new(models.Country)
	errs := binding.Bind(req, country)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := country.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	queryDict, _ := c.HTTPUtilDunc.DecodeHTTPBody(req)

	ctryExist := &models.Country{}
	qryparam := map[string]interface{}{"id": id}
	err := c.DataStore.FetchFirstGenericObject(qryparam, ctryExist)
	ctryExist.Updatedat = time.Now()

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		ctryExist.Name = country.Name
		ctryExist.Updatedat = time.Now()
		err := c.DataStore.UpdateDatabaseObject(ctryExist, queryDict)
		if err != nil {
			panic(err)
		} else {
			r.JSON(res, 200, ctryExist)
		}
	} else {
		fmt.Println(err.Error())
		panic(err)
	}
}

// UpdateTown ... update a merchant by id
func (c CommonController) UpdateTown(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	town := new(models.Towns)
	errs := binding.Bind(req, town)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := town.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	queryDict, _ := c.HTTPUtilDunc.DecodeHTTPBody(req)

	twnExist := &models.Towns{}
	qryparam := map[string]interface{}{"id": id}
	err := c.DataStore.FetchFirstGenericObject(qryparam, twnExist)
	twnExist.Updatedat = time.Now()

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		twnExist.Name = town.Name
		twnExist.Updatedat = time.Now()
		twnExist.RegionStateID = town.RegionStateID
		err := c.DataStore.UpdateDatabaseObject(twnExist, queryDict)
		if err != nil {
			panic(err)
		} else {
			r.JSON(res, 200, twnExist)
		}
	} else {
		fmt.Println(err.Error())
		panic(err)
	}
}

// UpdateRegion ... Update a Region by ID
func (c CommonController) UpdateRegion(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	region := new(models.RegionState)
	errs := binding.Bind(req, region)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	queryDict, _ := c.HTTPUtilDunc.DecodeHTTPBody(req)

	bindingErr := region.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	regionExist := &models.RegionState{}
	//query := tx.Where("id = ?", id).First(regionExist)

	qryparam := map[string]interface{}{"id": id}
	err := c.DataStore.FetchFirstGenericObject(qryparam, regionExist)

	regionExist.Updatedat = time.Now()

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		regionExist.Name = region.Name
		regionExist.Updatedat = time.Now()
		regionExist.CountryID = region.CountryID
		//UpdateDatabaseObject
		err := c.DataStore.UpdateDatabaseObject(regionExist, queryDict)
		if err != nil {
			panic(err)
		} else {
			r.JSON(res, 200, regionExist)
		}

	} else {
		fmt.Println(err.Error())
		panic(err)
	}
}

// SearchCountryGeneric ... Search Country by any field
func (c CommonController) SearchCountryGeneric(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	search := vars["search"]
	if search != "search" {
		r.JSON(res, 422, "Search Parameter is mandatory")
		return
	}
	country := []models.Country{}
	regions, err := c.genericSearch(&country, req)
	if err == nil {
		r.JSON(res, 200, regions)
		return
	}
	r.JSON(res, 400, err.Error())
}

// SearchRegionStateGeneric ... Search Country by any field
func (c CommonController) SearchRegionStateGeneric(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	search := vars["search"]
	if search != "search" {
		r.JSON(res, 422, "Search Parameter is mandatory")
		return
	}
	regionsstate := models.RegionState{}
	regions, err := c.genericSearch(&regionsstate, req)
	if err == nil {
		r.JSON(res, 200, regions)
		return
	}
	r.JSON(res, 400, err.Error())
}

// SearchTown ... Search Country by any field
func (c CommonController) SearchTown(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	search := vars["search"]
	if search != "search" {
		r.JSON(res, 422, "Search Parameter is mandatory")
		return
	}
	towns := models.Towns{}
	result, err := c.genericSearch(&towns, req)
	if err == nil {
		r.JSON(res, 200, result)
		return
	}
	r.JSON(res, 400, err.Error())
}

// genericSearch ... Search for any type
func (c CommonController) genericSearch(entity interface{}, req *http.Request) (interface{}, *utility.DataStoreError) {
	queryDict, err := c.HTTPUtilDunc.DecodeHTTPBody(req)
	//entities := []interface{}{entity}
	if err == nil {
		_, err := c.DataStore.SearchAnyGenericObject(queryDict, entity)
		if err != nil {
			return entity, err
		}
	}
	return entity, nil
}

// ShowCountry ... select a merchant by id
func (c CommonController) ShowCountry(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	// find in the database
	country := &models.Country{}

	qryparam := map[string]interface{}{"id": id}
	err := c.DataStore.FetchFirstGenericObject(qryparam, &country)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, country)
	} else {
		panic(err)
	}
}

// FetchAllCountries ... select a merchant by id
func (c CommonController) FetchAllCountries(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})

	// find in the database
	countries := []models.Country{}
	err := c.DataStore.FetchAllGenericObject(&countries)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, countries)
	} else {
		panic(err)
	}
}

// FetchCountryRegion ... Fetch all the regions/state of a country
func (c CommonController) FetchCountryRegion(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	countryID := vars["country_id"]

	// find in the database
	regions := []models.RegionState{}

	qryparam := map[string]interface{}{"country_id": countryID}
	_, err := c.DataStore.SearchAnyGenericObject(qryparam, &regions)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, regions)
	} else {
		panic(err)
	}
}

// FetchRegionTowns ... Fetch all the towns of a region
func (c CommonController) FetchRegionTowns(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	regionID := vars["region_id"]

	// find in the database
	towns := []models.Towns{}
	qryparam := map[string]interface{}{"region_state_id": regionID}
	_, err := c.DataStore.SearchAnyGenericObject(qryparam, &towns)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, towns)
	} else {
		panic(err)
	}
}
