package merchant

import (
	"net/http"
	"time"

	"github.com/mholt/binding"

	"xtremepay.com/backoffice/models"
	"xtremepay.com/backoffice/models/util"
)

//Merchant ...
type Merchant struct {
	models.BaseModel
	Account       util.Account
	AccountID     int
	Customer      util.Customer
	CustomerID    int
	AlternativeID string `sql:"not null;unique"`
	Goods         []Goods
}

// TableName ...
func (mer Merchant) TableName() string {
	return "xtmc_merchant"
}

// FieldMap ...
func (mer *Merchant) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&mer.AccountID: binding.Field{
			Form:     "Account",
			Required: true,
		},
		&mer.CustomerID: binding.Field{
			Form:     "Customer",
			Required: true,
		},
	}
}

// Validate ...
func (mer Merchant) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

//Goods ...
type Goods struct {
	models.BaseModel
	MerchantID      int
	PercentDiscount float32
	AvailFrom       time.Time
	AvailTo         time.Time
	Promo           bool
	UnitPrice       float32
	GoodServices    util.GoodServices
	GoodserviceID   int
	GoodCategoryID  int
	GoodHist        []GoodHist
}

// TableName ...
func (good Goods) TableName() string {
	return "xtmc_goods"
}

// FieldMap ...
func (good *Goods) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&good.MerchantID: binding.Field{
			Form:     "Merchant",
			Required: true,
		},
		&good.UnitPrice: binding.Field{
			Form:     "Unit Price",
			Required: true,
		},
	}
}

// Validate ...
func (good Goods) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

//GoodHist ...
type GoodHist struct {
	models.BaseModel
	MerchantID      int
	GoodsID         int
	PercentDiscount float32
	AvailFrom       time.Time
	AvailTo         time.Time
	Promo           bool
	UnitPrice       float32
	GoodServices    util.GoodServices
	GoodserviceID   int
	GoodCategoryID  int
}

// TableName ...
func (gdhist GoodHist) TableName() string {
	return "xtmc_good_hist"
}

// FieldMap ...
func (gdhist *GoodHist) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&gdhist.MerchantID: binding.Field{
			Form:     "Merchant",
			Required: true,
		},
		&gdhist.UnitPrice: binding.Field{
			Form:     "Unit Price",
			Required: true,
		},
	}
}

// Validate ...
func (gdhist GoodHist) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// GoodCategory ... Categories of products in the system
type GoodCategory struct {
	models.BaseModel
	Name        string
	Description string
}

// TableName ...
func (gdcat GoodCategory) TableName() string {
	return "xtmc_good_cat"
}

// FieldMap ...
func (gdcat *GoodCategory) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&gdcat.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&gdcat.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
	}
}

// Validate ...
func (gdcat GoodCategory) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}
