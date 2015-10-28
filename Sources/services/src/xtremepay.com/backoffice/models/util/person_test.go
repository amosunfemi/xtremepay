package util_test

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/spf13/viper"
	. "xtremepay.com/backoffice"
	. "xtremepay.com/backoffice/models"
	. "xtremepay.com/backoffice/models/util"
)

var _ = Describe("Person", func() {

	var (
		person         Person
		serviceManager ServiceManager
		dbConn         *gorm.DB
		baseModel      BaseModel
		idType         IDType
		addresses      []Addresses
		contacts       []Contacts
		idtypes        []PersonIDType
	)

	BeforeEach(func() {
		const shortForm = "2006-Jan-02"
		idtime, _ := time.Parse(shortForm, "2013-Feb-03")
		baseModel = BaseModel{Status: "ACTIVE", Createdat: time.Now()}
		addresses = []Addresses{{baseModel, "HOME", "B58", "TSA-ADDO", "LA", 1, 1, 1, 0, 0}}
		contacts = []Contacts{{baseModel, "+233240106094", "", "", "sunday.amosun@gmail.com", "", "", 0, 0}}
		idType = IDType{baseModel, "PASSPORT", "INTERNATION PASSPORT", "NIGERIAN IMMIGRATION"}
		idtypes = []PersonIDType{{baseModel, 0, idType.ID, time.Now(), idtime, nil}}
		person = Person{baseModel, "SUNDAY", "ADEFEMI", "AMOSUN", "MR", "MALE", "IT CONSULTANT", time.Now(), addresses,
			contacts, idtypes, 2, 2}

		viperConfig := viper.New()
		serviceManager.ViperConfig = viperConfig
		serviceManager.LoadConfig("config_test.json")
		serviceMode := serviceManager.ViperConfig.GetString("service.mode")
		dbDetail := serviceManager.ViperConfig.GetStringMapString(fmt.Sprintf("service.datastore.%s", serviceMode))
		db, err := serviceManager.InitDB(dbDetail)
		dbConn = &db
		if err != nil {
			fmt.Println(err.Error())
		}
		personJSON, _ := json.Marshal(&person)
		fmt.Println(string(personJSON))

	})

	Describe("Save Person and other releated data", func() {
		Context("Save Person", func() {
			It("Return idType id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&idType).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(idType.ID).To(BeNumerically(">", 0))
			})
			It("Return person id", func() {
				tx := dbConn.Begin()
				if err := tx.Create(&person).Error; err != nil {
					tx.Rollback()
				}
				tx.Commit()
				tx.Close()
				Expect(person.ID).To(BeNumerically(">", 0))
			})
		})

	})

})
