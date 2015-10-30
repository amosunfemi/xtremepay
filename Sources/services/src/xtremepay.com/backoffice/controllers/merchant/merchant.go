package merchant

import (
	"net/http"

	"fmt"

	"github.com/albrow/forms"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/unrolled/render"
	models "xtremepay.com/backoffice/models/merchant"
)

//Controller ...
type Controller struct {
	Db *gorm.DB
}

// Create ... create new merchant
func (c Controller) Create(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	merchantData, err := forms.Parse(req)
	if err != nil {
		panic(err)
	}

	// validations
	val := merchantData.Validator()
	val.Require("customer")
	val.Require("alternative_id")
	if val.HasErrors() {
		r.JSON(res, 422, val.ErrorMap())
		return
	}

	// save to database
	p := &models.Merchant{
	//Customer:      nil,
	//AlternativeID: merchantData.Get("alternative_id"),
	}

	tx := c.Db.Begin()

	if err := tx.Create(p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// Show ... select a merchant by id
func (c Controller) Show(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	// find in the database
	merchant := &models.Merchant{}
	query := c.Db.Where("id = ?", id).First(merchant)

	if query.Error == gorm.RecordNotFound {
		r.JSON(res, 400, query.Error)
	} else if query.Error == nil {
		r.JSON(res, 200, merchant)
	} else {
		fmt.Println(query.Error.Error())
		panic(query.Error)
	}

}

// Update ... update a merchant by id
func (c Controller) Update(res http.ResponseWriter, req *http.Request) {
	/*r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	// parse data
	personData, err := forms.Parse(req)
	if err != nil {
		panic(err)
	}

	// find in the database
	p := &models.Person{}
	if err := models.Merchant.Find(id, p); err != nil {
		panic(err)
	}

	// update model
	if personData.KeyExists("Name") {
		p.Name = personData.Get("Name")
	}
	if personData.KeyExists("Age") {
		p.Age = personData.GetInt("Age")
	}
	if err := models.Merchant.Save(p); err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)*/
}

// Index ... Fetch all merchant, this should be done by page and limit ...
// Its should not be available to all
func (c Controller) Index(res http.ResponseWriter, req *http.Request) {
	/*r := render.New(render.Options{})

	// find all Merchant in the database
	Merchant := []*models.Person{}
	if err := models.Merchant.NewQuery().Run(&Merchant); err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, Merchant)*/
}

// Delete ... Update a merchant status to Delete
func (c Controller) Delete(res http.ResponseWriter, req *http.Request) {
	/*r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	// delete from database
	if _, err := models.Merchant.Delete(id); err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, struct{}{})*/
}
