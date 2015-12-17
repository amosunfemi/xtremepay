package controllers

import (
	"fmt"
	"net/http"
	"reflect"
	"time"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//CommonController ...
type CommonController struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
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

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

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

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

	// render response
	r.JSON(res, 200, p)
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

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

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

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

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

	tx := c.Db.Begin()

	ctryExist := &models.Country{}
	query := tx.Where("id = ?", id).First(ctryExist)
	ctryExist.Updatedat = time.Now()

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		ctryExist.Name = country.Name
		ctryExist.Updatedat = time.Now()
		if err := tx.Save(&ctryExist).Error; err != nil {
			tx.Rollback()
			panic(err)
		}
		tx.Commit()
		r.JSON(res, 200, ctryExist)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
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

	tx := c.Db.Begin()

	twnExist := &models.Towns{}
	query := tx.Where("id = ?", id).First(twnExist)
	twnExist.Updatedat = time.Now()

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		twnExist.Name = town.Name
		twnExist.Updatedat = time.Now()
		twnExist.RegionStateID = town.RegionStateID
		if err := tx.Save(&twnExist).Error; err != nil {
			tx.Rollback()
			panic(err)
		}
		tx.Commit()
		r.JSON(res, 200, twnExist)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// UpdateRegion ... update a merchant by id
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

	bindingErr := region.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	tx := c.Db.Begin()

	regionExist := &models.RegionState{}
	query := tx.Where("id = ?", id).First(regionExist)
	regionExist.Updatedat = time.Now()

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		regionExist.Name = region.Name
		regionExist.Updatedat = time.Now()
		regionExist.CountryID = region.CountryID
		if err := tx.Save(&regionExist).Error; err != nil {
			tx.Rollback()
			panic(err)
		}
		tx.Commit()
		r.JSON(res, 200, regionExist)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
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
	queryDict, err := c.HTTPUtilDunc.DecodeHTTPBody(req)
	//err := json.Unmarshal([]byte(queryString), &queryDict)
	if err == nil {
		country := []models.Country{}
		query := c.Db.Where(queryDict).First(&country)

		if query.Error == gorm.RecordNotFound {
			r.JSON(res, 404, query.Error.Error())
		} else if query.Error == nil {
			r.JSON(res, 200, country)
		} else {
			panic(query.Error)
		}
	} else {
		//panic(err)
		r.JSON(res, 422, "Incorrect query format")
	}
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
func (c CommonController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := c.HTTPUtilDunc.DecodeHTTPBody(req)
	entities := []interface{}{entity}
	if err == nil {
		fmt.Println(reflect.TypeOf(entities))
		query := c.Db.Where(queryDict).Find(entity)
		if query.Error == gorm.RecordNotFound {
			return entity, query.Error
		}
		return entity, nil
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
	query := c.Db.Where("id = ?", id).First(country)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, country)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// FetchAllCountries ... select a merchant by id
func (c CommonController) FetchAllCountries(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})

	// find in the database
	countries := []models.Country{}

	query := c.Db.Find(&countries)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, countries)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// FetchCountryRegion ... Fetch all the regions/state of a country
func (c CommonController) FetchCountryRegion(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	countryID := vars["country_id"]

	// find in the database
	regions := []models.RegionState{}

	query := c.Db.Where("country_id = ?", countryID).Find(&regions)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, regions)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// FetchRegionTowns ... Fetch all the towns of a region
func (c CommonController) FetchRegionTowns(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	regionID := vars["region_id"]

	// find in the database
	towns := []models.Towns{}

	query := c.Db.Where("region_state_id = ?", regionID).Find(&towns)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, towns)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}
