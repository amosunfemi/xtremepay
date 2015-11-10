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
func (c AccountCategory) TableName() string {
	return "xtac_account_category"
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
func (c AccountFundSource) TableName() string {
	return "xtac_account_fund_source"
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
func (c AccountLimit) TableName() string {
	return "xtac_account_limit"
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
		&acct.AccountNo: binding.Field{
			Form:     "AccountNo",
			Required: true,
		},
		&acct.AccountCategoryID: binding.Field{
			Form:     "AccountCategoryID",
			Required: true,
		},
	}
}

// Validate ...
func (acctMap AccountFundMapping) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
