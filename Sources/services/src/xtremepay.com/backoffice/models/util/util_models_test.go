package util_test

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/spf13/viper"
	. "xtremepay.com/backoffice"
	. "xtremepay.com/backoffice/models"
	. "xtremepay.com/backoffice/models/util"
	. "xtremepay.com/backoffice/services"
)

var _ = Describe("UtilModels", func() {
	var (
		country        Country
		ngnCountry     Country
		serviceManager ServiceManager
		dbConn         *gorm.DB
		baseModel      BaseModel
		utility        Utility

		curr1 Currency
		curr2 Currency
	)

	BeforeEach(func() {

		baseModel = BaseModel{Status: "ACTIVE", Createdat: time.Now()}
		country = Country{baseModel, "GHA", "GHANA",
			[]RegionState{{baseModel, "GREATER ACCRA", 0, []Towns{{baseModel, 0, "ACCRA"}}},
				{baseModel, "VOLTA REGION", 0, []Towns{{baseModel, 0, "HO"}}}, {baseModel, "NORTHERN REGION", 0, []Towns{{baseModel, 0, "TAMALE"}}}}}

		ngnCountry = Country{baseModel, "NGA", "NIGERIA", []RegionState{{baseModel, "LAGOS STATE", 0, []Towns{{baseModel, 0, "BADAGRY"}, {baseModel, 0, "IKEJA"}, {baseModel, 0, "VICTORIA ISLAND"}, {baseModel, 0, "AMUWO-ODOFIN"}}},
			{baseModel, "OSUN STATE", 0, []Towns{{baseModel, 0, "OSOGBO"}, {baseModel, 0, "ILE-IFE"}, {baseModel, 0, "EJIGBO"}}},
			{baseModel, "OGUN STATE", 0, []Towns{{baseModel, 0, "ABEOKUTA"}, {baseModel, 0, "IJEBU-ODE"}, {baseModel, 0, "SHAGAMU"}, {baseModel, 0, "SANGO-OTTA"}}}}}

		curr1 = Currency{baseModel, 1, "288", "GHS", "GHANA CEDIS", 2}
		curr2 = Currency{baseModel, 2, "566", "NGN", "NIGERIAN NAIRA", 2}

		viperConfig := viper.New()
		serviceManager.ViperConfig = viperConfig
		serviceManager.LoadConfig("config_test.json")
		serviceMode := serviceManager.ViperConfig.GetString("service.mode")
		dbDetail := serviceManager.ViperConfig.GetStringMapString(fmt.Sprintf("service.datastore.%s", serviceMode))
		db, err := serviceManager.InitDB(dbDetail)
		dbConn = &db
		utility = Utility{dbConn}
		if err != nil {
			Panic()
		}

	})

	Describe("Save Country and other releated data", func() {
		Context("Save Country", func() {
			It("Return country id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&country).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(country.ID).To(BeNumerically(">", 0))
			})
			It("Return country id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&ngnCountry).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(ngnCountry.ID).To(BeNumerically(">", 0))
			})

		})

	})

	Describe("Save Currency", func() {
		Context("Save Currency", func() {
			It("Return Currency id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&curr1).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(curr1.ID).To(BeNumerically(">", 0))
			})
			It("Return country id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&curr2).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(curr2.ID).To(BeNumerically(">", 0))
			})
		})
	})
})
