package routers

import (
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	merchant "xtremepay.com/backoffice/controllers/merchant"
	base "xtremepay.com/backoffice/models"
	utilmodels "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/security/core/authentication"
	utilFunc "xtremepay.com/backoffice/utility"
	//utilmodels "xtremepay.com/backoffice/models/util"
)

// AccountRouter ... The accounting services definition, customer, account etc
type AccountRouter struct {
	Db *gorm.DB
}

// Routing ... list of routing services
func (c AccountRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", Createdat: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	account := merchant.Controller{c.Db, baseModel, httpUtilFunc}
	// Merchant url mappings

	router.Handle(apiprefix+"/account",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(merchant.CreateMerchant),
		)).Methods("POST")

	// Merchant goods mappings
	router.Handle(apiprefix+"/merchant/goods",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(merchant.CreateGood),
		)).Methods("POST")
}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c AccountRouter) MigrateDB() {
	c.Db.AutoMigrate(&utilmodels.Account{}, &utilmodels.AccountCategory{}, &utilmodels.AccountFundSource{}, &utilmodels.AccountLimit{}, &utilmodels.Customer{},
		&utilmodels.CustomerAccounts{}, &utilmodels.CustomerType{})
	//c.Db.Model(&merchantmodels.Goods{}).AddForeignKey("merchant_id", "xtmc_merchant(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&merchantmodels.Goods{}).AddForeignKey("good_category_id", "xtmc_good_category(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&merchantmodels.GoodHist{}).AddForeignKey("goods_id", "xtmc_goods(id)", "RESTRICT", "RESTRICT")
	//xtmc_good_cat
}
