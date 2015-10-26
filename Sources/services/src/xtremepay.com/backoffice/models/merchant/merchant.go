package merchant

import (
	"time"

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

func (c Merchant) TableName() string {
	return "xtmc_merchant"
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
	GoodHist        []GoodHist
}

func (c Goods) TableName() string {
	return "xtmc_goods"
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
}

func (c GoodHist) TableName() string {
	return "xtmc_good_hist"
}
