package util

import (
	"xtremepay.com/backoffice/models"
)

//Bank ... The bank's maintenance table
type Bank struct {
	models.BaseModel
	Code         string `sql:"not null;unique"`
	Name         string `sql:"not null;unique"`
	ClearingCode string
	Country      Country
	CountryID    int
}

func (c Bank) TableName() string {
	return "xtut_bank"
}

//BankDeposit ... Deposit received via banks
type BankDeposit struct {
	models.BaseModel
	Bank      Bank
	BankID    int
	Amount    float32
	AccountNo string
}

func (c BankDeposit) TableName() string {
	return "xtut_bank_deposit"
}
