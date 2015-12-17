package util

import (
	"net/http"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

// Account ...
type Account struct {
	models.BaseModel
	AccountType         AccountCategory
	AccountNo           string `sql:"not null;unique"`
	AccountCategoryID   int
	AccountFundSource   AccountFundSource
	AccountFundSourceID int
	AccountLimit        AccountLimit
	AccountLimitID      int
	MaxBalance          float32
	MinBalance          float32
	CurrentBalance      float32
	CustomerID          int
	Customer            Customer
}

// TableName ...
func (acct Account) TableName() string {
	return "xtac_accounts"
}

// FieldMap ...
func (acct *Account) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&acct.AccountNo: binding.Field{
			Form:     "AccountNo",
			Required: true,
		},
		&acct.AccountCategoryID: binding.Field{
			Form:     "AccountCategoryID",
			Required: true,
		},
		&acct.CustomerID: binding.Field{
			Form:     "CustomerID",
			Required: true,
		},
	}
}

// Validate ...
func (acct Account) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// AccountCategory ... Different account type, such as Individual, Merchant
type AccountCategory struct {
	models.BaseModel
	Name        string
	Description string
}

// TableName ...
func (acctCat AccountCategory) TableName() string {
	return "xtac_account_fund_source"
}

// FieldMap ...
func (acctCat *AccountCategory) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&acctCat.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&acctCat.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
	}
}

// Validate ...
func (acctCat AccountCategory) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// AccountFundSource ... that xtremepay can manage e.g
// MobileMoney, Wallet, Cards, Bank Account etc
type AccountFundSource struct {
	models.BaseModel
	Name        string `sql:"not null;unique"`
	Description string
	Provider    string //Bank, MNO, VISA, GSD etc
}

// TableName ...
func (acctfsrc AccountFundSource) TableName() string {
	return "xtac_account_fund_source"
}

// FieldMap ...
func (acctfsrc *AccountFundSource) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&acctfsrc.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&acctfsrc.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
		&acctfsrc.Provider: binding.Field{
			Form:     "Provider",
			Required: true,
		},
	}
}

// Validate ...
func (acctfsrc AccountFundSource) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// AccountLimit ... Limit defined for various kind of account
type AccountLimit struct {
	models.BaseModel
	AccountCategory   AccountCategory
	AccountCategoryID int
	TransLimit        float32
	TransPerDayLimit  float32
	TransPerMthLimit  float32
	LimitPeriod       string
}

// TableName ...
func (acctlm AccountLimit) TableName() string {
	return "xtac_account_limit"
}

// FieldMap ...
func (acctlm *AccountLimit) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&acctlm.AccountCategoryID: binding.Field{
			Form:     "AccountCategoryID",
			Required: true,
		},
		&acctlm.TransLimit: binding.Field{
			Form:     "TransLimit",
			Required: true,
		},
	}
}

// Validate ...
func (acctlm AccountLimit) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// AccountFundMapping ...
type AccountFundMapping struct {
	models.BaseModel
	Account           Account
	AccountNo         string
	FundSource        string
	AccountFundSource AccountFundSource
	MaxBalance        float32
	MinBalance        float32
	CurrentBalance    float32
}

// TableName ...
func (acctMap AccountFundMapping) TableName() string {
	return "xtac_account_limit"
}

// FieldMap ...
func (acctMap *AccountFundMapping) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&acctMap.AccountNo: binding.Field{
			Form:     "AccountNo",
			Required: true,
		},
		&acctMap.FundSource: binding.Field{
			Form:     "FundSource",
			Required: true,
		},
	}
}

// Validate ...
func (acctMap AccountFundMapping) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
