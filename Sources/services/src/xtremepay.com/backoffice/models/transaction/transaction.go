package transaction

import (
	"net/http"
	"time"

	"github.com/mholt/binding"

	"xtremepay.com/backoffice/models"
)

// Transaction ...
type Transaction struct {
	models.BaseModel
	Code      string    `json:"Code"`
	Narration string    `json:"Narration"`
	Type      string    `json:"Type"`
	DbAccount string    `json:"DbAccount"`
	CrAccount string    `json:"CrAccount"`
	TransDate time.Time `sql:"timestamp with time zone DEFAULT ('now'::text)::date" json:"TransDate"`
	ValueDate time.Time `sql:"timestamp with time zone DEFAULT ('now'::text)::date" json:"ValueDate"`
	Amount    float32
}

//TableName ...
func (txn Transaction) TableName() string {
	return "xttx_transaction"
}

// FieldMap ...
func (txn *Transaction) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&txn.Narration: binding.Field{
			Form:     "Narration",
			Required: true,
		},
		&txn.Type: "Type",
		&txn.DbAccount: binding.Field{
			Form:     "DbAccount",
			Required: true,
		},
		&txn.CrAccount: binding.Field{
			Form:     "CrAccount",
			Required: true,
		},

		&txn.TransDate: binding.Field{
			Form:     "TransDate",
			Required: true,
		},
	}
}

// Validate ...
func (txn Transaction) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// TransType ...
type TransType struct {
	models.BaseModel
	Code        string `json:"Code"`
	Description string `json:"Description"`
}

// TableName ...
func (txntype TransType) TableName() string {
	return "xttx_trans_type"
}

// FieldMap ...
func (txntype *TransType) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&txntype.Code: binding.Field{
			Form:     "Code",
			Required: true,
		},
		&txntype.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
	}
}

// Validate ...
func (txntype TransType) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
