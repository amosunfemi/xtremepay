package controllers

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	log "gopkg.in/inconshreveable/log15.v2"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//PersonController ...
type PersonController struct {
	BaseModel    base.BaseModel
	HTTPUtilFunc utility.HTTPUtilityFunctions
	DataStore    utility.DataStore
	Logger       log.Logger
}

// genericSearch ... Search for any type
func (c PersonController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := c.HTTPUtilFunc.DecodeHTTPBody(req)
	//entities := []interface{}{entity}
	if err == nil {
		_, err := c.DataStore.SearchAnyGenericObject(queryDict, &entity)
		if err != nil {
			return entity, err
		}
	}
	return entity, nil
}

// FetchPersonIDs ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonIDs(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	ids := models.PersonIDType{}
	idTypes := models.IDType{}
	//query := c.Db.Where("person_id = ?", personID).Find(&ids)
	//c.Db.Model(&ids).Related(&idTypes, "IDType")
	qryparam := map[string]interface{}{"person_id": personID}
	err := c.DataStore.FetchRelatedObject(qryparam, &ids, &idTypes, "IDType")
	ids.IDTypes = idTypes

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, ids)
	} else {
		panic(err)
	}
}

// FetchPersonContacts ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonContacts(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	contacts := []models.Contacts{}

	qryparam := map[string]interface{}{"person_id": personID}
	_, err := c.DataStore.SearchAnyGenericObject(qryparam, &contacts)

	//query := c.Db.Where("person_id = ?", personID).Find(&contacts)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, contacts)
	} else {
		panic(err)
	}
}

// FetchPersonAddresses ... Fetch all the regions/state of a country
func (c PersonController) FetchPersonAddresses(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	personID := vars["person_id"]

	// find in the database
	addresses := []models.Addresses{}

	qryparam := map[string]interface{}{"person_id": personID}
	_, err := c.DataStore.SearchAnyGenericObject(qryparam, &addresses)

	//query := c.Db.Where("person_id = ?", personID).Find(&contacts)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, addresses)
	} else {
		panic(err)
	}
}

// SearchAddressGeneric ... Search Country by any field
func (c PersonController) SearchAddressGeneric(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c PersonController) SearchContactGeneric(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c PersonController) SearchPersonGeneric(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c PersonController) CreatePersonIDType(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	r.JSON(res, 200, p)
}

// CreateContact ... add new contact to a person
func (c PersonController) CreateContact(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
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

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// DeletePerson ... create new person
func (c PersonController) DeletePerson(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	person := new(models.Person)
	i, _ := strconv.Atoi(vars["person_id"])
	qryparam := fmt.Sprintf("id = ?")
	// save to database
	//p := models.Person{c.BaseModel, person.FirstName, person.MiddleName, person.LastName, person.Title, person.Gender,
	//	person.Occupation, person.DateOfBirth, person.Addresses, person.Contacts, person.PersonIDType, person.CountryOfOriginID, person.CountryOfResidenceID}
	person.ID = i
	//qryparam := map[string]interface{}{"deleted_at": time.Now()}

	err := c.DataStore.DeleteDatabaseObjectWithParam(&person, qryparam, i)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, person)
}

// CreateAddress ... add new address to a person
func (c PersonController) CreateAddress(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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

	err := c.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}
