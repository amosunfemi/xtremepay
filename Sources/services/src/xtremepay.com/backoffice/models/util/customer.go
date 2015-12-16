package util

import (
	"net/http"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

//Customer ...
type Customer struct {
	models.BaseModel
	Person           Person
	PersonID         int
	CompanyEntites   CompanyEntities
	CompanyEntitesID int
	CustomerType     CustomerType
	CustomerTypeID   int
	CustomerAccounts []CustomerAccounts
}

// TableName ...
func (cust Customer) TableName() string {
	return "xtut_customer"
}

// FieldMap ...
func (cust *Customer) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&cust.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
		&cust.CompanyEntitesID: binding.Field{
			Form:     "CompanyEntitesID",
			Required: true,
		},
		&cust.CustomerTypeID: binding.Field{
			Form:     "CustomerTypeID",
			Required: true,
		},
	}
}

// Validate ...
func (cust Customer) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

//CustomerAccounts ...
type CustomerAccounts struct {
	models.BaseModel
	Accounts   []Account
	CustomerID int `sql:"index"`
}

//TableName ...
func (custacct CustomerAccounts) TableName() string {
	return "xtut_customer_accounts"
}

// FieldMap ...
func (custacct *CustomerAccounts) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&custacct.CustomerID: binding.Field{
			Form:     "CustomerID",
			Required: true,
		},
	}
}

// Validate ...
func (custacct CustomerAccounts) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// CustomerType ...
type CustomerType struct {
	models.BaseModel
	Name        string
	Code        string
	Description string
}

//TableName ...
func (custtype CustomerType) TableName() string {
	return "xtut_customer_type"
}

// FieldMap ...
func (custtype *CustomerType) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&custtype.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&custtype.Code: binding.Field{
			Form:     "Code",
			Required: true,
		},
		&custtype.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
	}
}

// Validate ...
func (custtype CustomerType) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
