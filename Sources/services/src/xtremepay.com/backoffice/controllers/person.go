package controllers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//PersonController ...
type PersonController struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// genericSearch ... Search for any type
func (c PersonController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := c.HTTPUtilDunc.DecodeHTTPBody(req)
	if err == nil {
		query := c.Db.Where(queryDict).Find(entity)
		if query.Error == gorm.RecordNotFound {
			return entity, query.Error
		}
		return entity, nil
	}
	return entity, nil
}

// FetchPersonIDs ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonIDs(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	ids := models.PersonIDType{}
	idTypes := models.IDType{}
	query := c.Db.Where("person_id = ?", personID).Find(&ids)
	c.Db.Model(&ids).Related(&idTypes, "IDType")
	ids.IDTypes = idTypes
	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, ids)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// FetchPersonContacts ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonContacts(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	contacts := []models.Contacts{}

	query := c.Db.Where("person_id = ?", personID).Find(&contacts)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, contacts)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// FetchPersonAddresses ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonAddresses(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	addresses := []models.Addresses{}

	query := c.Db.Where("person_id = ?", personID).Find(&addresses)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 404, query.Error.Error())
	} else if query.Error == nil {
		r.JSON(res, 200, addresses)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}
}

// SearchAddressGeneric ... Search Country by any field
func (c PersonController) SearchAddressGeneric(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})

	address := models.Addresses{}
	addresses, err := c.genericSearch(&address, req)
	if err == nil {
		r.JSON(res, 200, addresses)
		return
	}
	r.JSON(res, 400, err.Error())
}

// SearchContactGeneric ... Search Country by any field
func (c PersonController) SearchContactGeneric(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})

	contact := models.Contacts{}
	contacts, err := c.genericSearch(&contact, req)
	if err == nil {
		r.JSON(res, 200, contacts)
		return
	}
	r.JSON(res, 400, err.Error())
}

// SearchPersonGeneric ... Search Country by any field
func (c PersonController) SearchPersonGeneric(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})

	person := []models.Person{}
	people, err := c.genericSearch(&person, req)
	if err == nil {
		r.JSON(res, 200, people)
		return
	}
	r.JSON(res, 400, err.Error())
}

// CreatePersonIDType ... add new contact to a person
func (c PersonController) CreatePersonIDType(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	personIDType := new(models.PersonIDType)
	errs := binding.Bind(req, personIDType)
	idTypes := models.IDType{}
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := personIDType.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	p := models.PersonIDType{c.BaseModel, personIDType.PersonID, personIDType.IDType, personIDType.IDNumber, personIDType.DateIssued, personIDType.ExpiryDate, personIDType.ScannedPicture, idTypes}
	tx := c.Db.Begin()
	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()
	r.JSON(res, 200, p)
}

// CreateContact ... add new contact to a person
func (c PersonController) CreateContact(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	contact := new(models.Contacts)
	errs := binding.Bind(req, contact)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := contact.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.Contacts{c.BaseModel, contact.PhoneNo, contact.PhoneNo2, contact.PhoneNo3, contact.Email, contact.Website,
		contact.FacebookID, contact.PersonID, contact.CompanyEntitiesID}

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()
	// render response
	r.JSON(res, 200, p)
}

// CreatePerson ... create new person
func (c PersonController) CreatePerson(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	person := new(models.Person)
	errs := binding.Bind(req, person)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := person.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database
	p := models.Person{c.BaseModel, person.FirstName, person.MiddleName, person.LastName, person.Title, person.Gender,
		person.Occupation, person.DateOfBirth, person.Addresses, person.Contacts, person.PersonIDType, person.CountryOfOriginID, person.CountryOfResidenceID}

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

	// render response
	r.JSON(res, 200, p)
}

// CreateAddress ... add new address to a person
func (c PersonController) CreateAddress(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	address := new(models.Addresses)
	errs := binding.Bind(req, address)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := address.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database

	p := models.Addresses{c.BaseModel, address.AddressType, address.HouseNo, address.Street, address.Area, address.TownsID,
		address.RegionStateID, address.CountryID, address.PersonID, address.CompanyEntitiesID}

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
func (c PersonController) UpdateCountry(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) UpdateTown(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) UpdateRegion(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) SearchCountryGeneric(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) SearchRegionStateGeneric(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) SearchTown(res http.ResponseWriter, req *http.Request) {
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

// ShowCountry ... select a merchant by id
func (c PersonController) ShowCountry(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) FetchAllCountries(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) FetchCountryRegion(res http.ResponseWriter, req *http.Request) {
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
func (c PersonController) FetchRegionTowns(res http.ResponseWriter, req *http.Request) {
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
