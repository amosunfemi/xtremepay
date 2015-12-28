package controllers

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/merchant"
	"xtremepay.com/backoffice/utility"
)

//MerchantController ...
type MerchantController struct {
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
	DataStore    utility.DataStore
}

// CreateMerchant ... create new merchant
func (mer MerchantController) CreateMerchant(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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

	p := models.Merchant{mer.BaseModel, merchant.Account, merchant.AccountID, merchant.Customer, merchant.CustomerID, merchant.AlternativeID, merchant.Goods}

	err := mer.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// CreateGood ... create new merchant
func (mer MerchantController) CreateGood(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
	p := models.Goods{mer.BaseModel, good.MerchantID, good.PercentDiscount, good.AvailFrom, good.AvailTo, good.Promo, good.UnitPrice, good.GoodServices, good.GoodserviceID,
		good.GoodCategoryID, good.GoodHist}

	err := mer.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}

	// render response
	r.JSON(res, 200, p)
}

// Show ... select a merchant by id
func (mer MerchantController) Show(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	vars := mux.Vars(req)
	id := vars["id"]

	// find in the database
	merchant := &models.Merchant{}
	qryparam := map[string]interface{}{"id": id}
	_, err := mer.DataStore.SearchAnyGenericObject(qryparam, merchant)
	//query := c.Db.Where("id = ?", id).First(merchant)

	if err != nil && err.ErrNo == 1001 {
		r.JSON(res, 404, err.Error())
	} else if err == nil {
		//User exist in database, confirm his password
		r.JSON(res, 200, merchant)
	} else {
		panic(err)
	}

}

// Update ... update a merchant by id
func (mer MerchantController) Update(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (mer MerchantController) Index(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
func (mer MerchantController) Delete(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
