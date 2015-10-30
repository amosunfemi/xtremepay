package util

//Bank ... The bank's maintenance table
import (
	"xtremepay.com/backoffice/models"
)

// MobileOperator ...
type MobileOperator struct {
	models.BaseModel
	Code      string `sql:"not null;unique"`
	Name      string `sql:"not null;unique"`
	Country   Country
	CountryID int
}

// TableName ...
func (c MobileOperator) TableName() string {
	return "xtut_mobile_operator"
}
