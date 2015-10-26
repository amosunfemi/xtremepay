package util

import (
	"xtremepay.com/backoffice/models"
)

// GoodServices ...
type GoodServices struct {
	models.BaseModel
	Code       string
	Name       string `sql:"not null;unique"`
	BarCode    string
	Category   Category
	CategoryID int
}

func (c GoodServices) TableName() string {
	return "xtut_good_services"
}

// Category ...
type Category struct {
	models.BaseModel
	Name        string
	Description string
}

func (c Category) TableName() string {
	return "xtut_category"
}
