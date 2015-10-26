package util

import (
	"net/http"
	"unicode/utf8"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

//Country ...
type Country struct {
	models.BaseModel
	ISOCode      string        `sql:"not null;unique" json:"ISOCode"`
	Name         string        `sql:"not null;unique" json:"Name"`
	RegionStates []RegionState `json:"RegionStates"`
}

// TableName ...
func (c Country) TableName() string {
	return "xtut_country"
}

// FieldMap ...
func (c *Country) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&c.ISOCode: binding.Field{
			Form:     "ISOCode",
			Required: true,
		},
		&c.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&c.RegionStates: "RegionStates",
	}
}

// Validate ...
func (c Country) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	if utf8.RuneCountInString(c.ISOCode) != 3 {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"ISOCode"},
			Classification: "ComplaintError",
			Message:        "Country ISOCode must be of length 3.",
		})
	}
	return errs
}

//RegionState ...
type RegionState struct {
	models.BaseModel
	Name      string  `json:"Name"`
	CountryID int     `json:"CountryID"`
	Towns     []Towns `json:"Towns"`
}

// FieldMap ...
func (r *RegionState) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&r.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&r.CountryID: binding.Field{
			Form:     "CountryID",
			Required: true,
		},
		&r.Towns: "Towns",
	}
}

func (r RegionState) TableName() string {
	return "xtut_region_state"
}

func (r RegionState) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	if r.CountryID == 0 {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"CountryID"},
			Classification: "ComplaintError",
			Message:        "RegionState CountryID is mandatory.",
		})
	}

	if utf8.RuneCountInString(r.Name) == 0 || r.Name == "" {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"Name"},
			Classification: "ComplaintError",
			Message:        "RegionState Name is mondatory",
		})
	}
	return errs
}

//Towns ...
type Towns struct {
	models.BaseModel
	RegionStateID int    `json:"RegionStateID"`
	Name          string `json:"Name"`
}

func (t *Towns) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&t.RegionStateID: "RegionStateID",
		&t.Name:          "Name",
	}
}

func (t Towns) TableName() string {
	return "xtut_town"
}

func (t Towns) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	if t.RegionStateID == 0 {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"RegionStateID"},
			Classification: "ComplaintError",
			Message:        "RegionState RegionStateID is mandatory.",
		})
	}

	if utf8.RuneCountInString(t.Name) == 0 || t.Name == "" {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"Name"},
			Classification: "ComplaintError",
			Message:        "Town Name is mondatory",
		})
	}
	return errs
}

//Currency ...
type Currency struct {
	models.BaseModel
	CountryID    int    `json:"CountryID"`
	ISOCode      string `json:"ISOCode" sql:"not null"`
	Code         string `json:"Code" sql:"not null"`
	Name         string `json:"Name" sql:"not null"`
	DecimalPlace int    `json:"DecimalPlace"`
}

func (c *Currency) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&c.CountryID: binding.Field{
			Form:     "CountryID",
			Required: true,
		},
		&c.Code: binding.Field{
			Form:     "Code",
			Required: true,
		},
		&c.ISOCode: binding.Field{
			Form:     "ISOCode",
			Required: true,
		},
	}
}

func (c Currency) TableName() string {
	return "xtut_currencies"
}

func (c Currency) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	if c.CountryID == 0 {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"RegionStateID"},
			Classification: "ComplaintError",
			Message:        "CountryID is mandatory.",
		})
	}

	if utf8.RuneCountInString(c.Name) == 0 || c.Name == "" {
		errs = append(errs, binding.Error{
			FieldNames:     []string{"Name"},
			Classification: "ComplaintError",
			Message:        "Name is mondatory",
		})
	}
	return errs
}
