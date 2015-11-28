package utility

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)
import log "gopkg.in/inconshreveable/log15.v2"

// DataStore ...
type DataStore struct {
	StoreType string
	RDBMS     RDBMSImpl
}

// RDBMSImpl ... take care of RDBMS Datastore
type RDBMSImpl struct {
	DB gorm.DB
}

// Init ...
func (rdbms *RDBMSImpl) Init(dbtype string, dbhost string, username string, password string, port int, dbname string, log log.Logger) error {
	var err error
	connString := fmt.Sprintf("user=%s port=%d password=%s dbname=%s sslmode=disable", username, port, password, dbname)
	rdbms.DB, err = gorm.Open(dbtype, connString)
	if err != nil {
		log.Crit("Got error when connect database, the error is '%v'", err)
		return err
	}
	rdbms.DB.LogMode(true)
	fmt.Println("Connected")
	return nil
}

// InitSchema ...
func (rdbms *RDBMSImpl) InitSchema(values ...interface{}) {
	rdbms.DB.AutoMigrate(values)
}
