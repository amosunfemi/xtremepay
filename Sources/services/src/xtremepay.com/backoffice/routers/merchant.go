package routers

import (
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	controllers "xtremepay.com/backoffice/controllers"
	base "xtremepay.com/backoffice/models"
	merchantmodels "xtremepay.com/backoffice/models/merchant"
	"xtremepay.com/backoffice/security/core/authentication"
	utilFunc "xtremepay.com/backoffice/utility"
	//utilmodels "xtremepay.com/backoffice/models/util"
)

// MerchantRouter ... The merchant service definition struct
type MerchantRouter struct {
	DataStore utilFunc.DataStore
}

// Routing ... list of routing services
func (c MerchantRouter) Routing(router *mux.Router, apiprefix string) {
	baseModel := base.BaseModel{Status: "ACTIVE", Createdat: time.Now()}
	httpUtilFunc := utilFunc.HTTPUtilityFunctions{}
	merchant := controllers.MerchantController{baseModel, httpUtilFunc, c.DataStore}
	// Merchant url mappings

	router.Handle(apiprefix+"/merchant",
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
func (c MerchantRouter) MigrateDB() {
	modelArray := []interface{}{merchantmodels.Merchant{}, merchantmodels.GoodHist{}, merchantmodels.Goods{}, merchantmodels.GoodCategory{}, merchantmodels.BankMerchant{}, merchantmodels.Beneficiary{}}
	for _, model := range modelArray {
		//fmt.Println(model)
		c.DataStore.InitSchema(model)
	} //GoodCategory, BankMerchant, Beneficiary
	//c.DataStore.InitSchema(modelArray)
	//c.DataStore.InitSchema(&merchantmodels.Merchant{}) //, &merchantmodels.Goods{}, &merchantmodels.GoodHist{}, &merchantmodels.GoodCategory{})
	//c.Db.Model(&merchantmodels.Goods{}).AddForeignKey("merchant_id", "xtmc_merchant(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&merchantmodels.Goods{}).AddForeignKey("good_category_id", "xtmc_good_category(id)", "RESTRICT", "RESTRICT")
	//c.Db.Model(&merchantmodels.GoodHist{}).AddForeignKey("goods_id", "xtmc_goods(id)", "RESTRICT", "RESTRICT")
	//xtmc_good_cat
}
