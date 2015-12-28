package controllers

import (
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//CustomerController ...
type CustomerController struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// genericSearch ... Search for any type
func (cust CustomerController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := cust.HTTPUtilDunc.DecodeHTTPBody(req)
	if err == nil {
		query := cust.Db.Where(queryDict).Find(entity)
		if query.Error == gorm.RecordNotFound {
			return entity, query.Error
		}
		return entity, nil
	}
	return entity, nil
}

// CreateCustomerType ... Add new customer
func (cust CustomerController) CreateCustomerType(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	custType := new(models.CustomerType)
	errs := binding.Bind(req, custType)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := custType.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	p := models.CustomerType{cust.BaseModel, custType.Name, custType.Code, custType.Description}
	//p := models.User{acct.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
	//	user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	tx := cust.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()
	// render response
	r.JSON(res, 200, p)
}

// CreateCustomer ... Add new customer
func (cust CustomerController) CreateCustomer(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	customer := new(models.Customer)
	errs := binding.Bind(req, customer)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := customer.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.Customer{cust.BaseModel, customer.Person, customer.PersonID, customer.CompanyEntites, customer.CompanyEntitesID, customer.CustomerType, customer.CustomerTypeID}
	//p := models.User{acct.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
	//	user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	tx := cust.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()
	// render response
	r.JSON(res, 200, p)
}
