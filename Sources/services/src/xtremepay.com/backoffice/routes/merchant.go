package services

import (
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	merchant "xtremepay.com/backoffice/controllers/merchant"
	merchantmodels "xtremepay.com/backoffice/models/merchant"
	//utilmodels "xtremepay.com/backoffice/models/util"
	"fmt"
)

// Merchant ... The merchant service definition struct
type Merchant struct {
	Db *gorm.DB
}

// Routing ... list of routing services
func (c Merchant) Routing(router *mux.Router, apiprefix string) {
	merchant := merchant.Controller{c.Db}
	fmt.Println(apiprefix)
	// Merchant url mappings
	router.HandleFunc(apiprefix+"/merchant", merchant.Create).Methods("POST")
	router.HandleFunc(apiprefix+"/merchant/{id}", merchant.Show).Methods("GET")
	router.HandleFunc(apiprefix+"/merchant/{id}", merchant.Update).Methods("PUT", "PATCH")
	router.HandleFunc(apiprefix+"/merchant", merchant.Index).Methods("GET")
	router.HandleFunc(apiprefix+"/merchant/{id}", merchant.Delete).Methods("DELETE")

	// Merchant goods mappings
	router.HandleFunc(apiprefix+"/merchant/{id}/goods", merchant.Create).Methods("GET")
	router.HandleFunc(apiprefix+"/merchant/goods/{id}", merchant.Create).Methods("GET")
	router.HandleFunc(apiprefix+"/merchant/history/goods/{id}", merchant.Create).Methods("GET")

}

// MigrateDB ... Create merchant table and other tables that need to work with merchant
func (c Merchant) MigrateDB() {
	c.Db.AutoMigrate(&merchantmodels.Merchant{}, &merchantmodels.Goods{}, &merchantmodels.GoodHist{})
	c.Db.Model(&merchantmodels.Goods{}).AddForeignKey("merchant_id", "xtmc_merchant(id)", "RESTRICT", "RESTRICT")
	c.Db.Model(&merchantmodels.GoodHist{}).AddForeignKey("goods_id", "xtmc_goods(id)", "RESTRICT", "RESTRICT")
}
