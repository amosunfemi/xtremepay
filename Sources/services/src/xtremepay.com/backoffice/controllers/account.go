package controllers

import (
	"net/http"

	"github.com/mholt/binding"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//AccountController ...
type AccountController struct {
	DataStore    utility.DataStore
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// CreateCustomerType ... Add new customer
func (acct AccountController) CreateCustomerType(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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
	p := models.CustomerType{acct.BaseModel, custType.Name, custType.Code, custType.Description}
	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateCustomer ... Add new customer
func (acct AccountController) CreateCustomer(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
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

	p := models.Customer{acct.BaseModel, customer.Person, customer.PersonID, customer.CompanyEntites, customer.CompanyEntitesID, customer.CustomerType, customer.CustomerTypeID}
	//p := models.User{acct.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
	//	user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateAccount ... add new contact to a person
func (acct AccountController) CreateAccount(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	account := new(models.Account)
	errs := binding.Bind(req, account)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := account.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.Account{acct.BaseModel, account.AccountType, account.AccountNo, account.AccountCategoryID, account.AccountFundSource, account.AccountFundSourceID,
		account.AccountLimit, account.AccountLimitID, account.MaxBalance, account.MinBalance, account.CurrentBalance, account.CustomerID, account.Customer}
	//p := models.User{acct.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
	//	user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateAccountCategory ... Create Account Categories
func (acct AccountController) CreateAccountCategory(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	acctCat := new(models.AccountCategory)
	errs := binding.Bind(req, acctCat)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := acctCat.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.AccountCategory{acct.BaseModel, acctCat.Name, acctCat.Description}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateAccountFundSource ... Create Account Categories
func (acct AccountController) CreateAccountFundSource(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	acctFund := new(models.AccountFundSource)
	errs := binding.Bind(req, acctFund)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := acctFund.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.AccountFundSource{acct.BaseModel, acctFund.Name, acctFund.Description, acctFund.Provider}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateAccountLimit ... Create Account Categories
func (acct AccountController) CreateAccountLimit(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	acctLimit := new(models.AccountLimit)
	errs := binding.Bind(req, acctLimit)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := acctLimit.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.AccountLimit{acct.BaseModel, acctLimit.AccountCategory, acctLimit.AccountCategoryID, acctLimit.TransLimit,
		acctLimit.TransPerDayLimit, acctLimit.TransPerMthLimit, acctLimit.LimitPeriod}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}

// CreateAccountFundMapping ... Create Account Categories
func (acct AccountController) CreateAccountFundMapping(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	acctfund := new(models.AccountFundMapping)
	errs := binding.Bind(req, acctfund)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := acctfund.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}

	p := models.AccountFundMapping{acct.BaseModel, acctfund.Account, acctfund.AccountNo, acctfund.FundSource, acctfund.AccountFundSource, acctfund.MaxBalance,
		acctfund.MinBalance, acctfund.CurrentBalance}

	err := acct.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	// render response
	r.JSON(res, 200, p)
}
