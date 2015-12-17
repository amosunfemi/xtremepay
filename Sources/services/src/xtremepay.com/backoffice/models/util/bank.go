package util

import (
	"net/http"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

//Bank ... The bank's maintenance table
type Bank struct {
	models.BaseModel
	Code         string `sql:"not null;unique"`
	Name         string `sql:"not null;unique"`
	ClearingCode string
	SWIFTCode    string
	Country      Country
	CountryID    int
}

// TableName ...
func (bank Bank) TableName() string {
	return "xtut_bank"
}

// FieldMap ...
func (bank *Bank) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&bank.Code: binding.Field{
			Form:     "Code",
			Required: true,
		},
		&bank.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
	}
}

// Validate ...
func (bank Bank) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

//BankDeposit ... Deposit received via banks
type BankDeposit struct {
	models.BaseModel
	Bank      Bank
	BankID    int
	Amount    float32
	AccountNo string
}

//TableName ...
func (bnkDep BankDeposit) TableName() string {
	return "xtut_bank_deposit"
}

// FieldMap ...
func (bnkDep *BankDeposit) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&bnkDep.BankID: binding.Field{
			Form:     "BankID",
			Required: true,
		},
		&bnkDep.Amount: binding.Field{
			Form:     "Amount",
			Required: true,
		},
		&bnkDep.AccountNo: binding.Field{
			Form:     "AccountNo",
			Required: true,
		},
	}
}

// Validate ...
func (bnkDep BankDeposit) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
