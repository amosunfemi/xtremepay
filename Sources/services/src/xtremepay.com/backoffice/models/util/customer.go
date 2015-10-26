package util

import (
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

func (c Customer) TableName() string {
	return "xtut_customer"
}

//CustomerAccounts ...
type CustomerAccounts struct {
	models.BaseModel
	Account    []Account
	CustomerID int `sql:"index"`
}

func (c CustomerAccounts) TableName() string {
	return "xtut_customer_accounts"
}

// CustomerType ...
type CustomerType struct {
	models.BaseModel
	Name        string
	Code        string
	Description string
}

func (c CustomerType) TableName() string {
	return "xtut_customer_type"
}
