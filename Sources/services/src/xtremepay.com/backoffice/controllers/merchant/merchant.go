package merchant

import (
	"net/http"

	"fmt"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/merchant"
	"xtremepay.com/backoffice/utility"
)

//Controller ...
type Controller struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// CreateMerchant ... create new merchant
func (c Controller) CreateMerchant(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	merchant := new(models.Merchant)
	errs := binding.Bind(req, merchant)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := merchant.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database

	p := models.Merchant{c.BaseModel, merchant.Account, merchant.AccountID, merchant.Customer, merchant.CustomerID, merchant.AlternativeID, merchant.Goods}

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

	// render response
	r.JSON(res, 200, p)
}

// CreateGood ... create new merchant
func (c Controller) CreateGood(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	good := new(models.Goods)
	errs := binding.Bind(req, good)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}

	bindingErr := good.Validate(req, errs)

	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	// save to database
	p := models.Goods{c.BaseModel, good.MerchantID, good.PercentDiscount, good.AvailFrom, good.AvailTo, good.Promo, good.UnitPrice, good.GoodServices, good.GoodserviceID,
		good.GoodCategoryID, good.GoodHist}

	tx := c.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()

	// render response
	r.JSON(res, 200, p)
}

// Show ... select a merchant by id
func (c Controller) Show(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c Controller) Update(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c Controller) Index(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (c Controller) Delete(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
