package util

import (
	"net/http"
	"time"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

//Person ... details
type Person struct {
	models.BaseModel
	FirstName            string         `json:"FirstName" sql:"not null"`
	MiddleName           string         `json:"MiddleName"`
	LastName             string         `json:"LastName" sql:"not null"`
	Title                string         `json:"Title"`
	Gender               string         `json:"Gender" sql:"not null"`
	Occupation           string         `json:"Occupation"`
	DateOfBirth          time.Time      `json:"DateOfBirth"`
	Addresses            []Addresses    `json:"Addresses"`
	Contacts             []Contacts     `json:"Contacts"`
	PersonIDType         []PersonIDType `json:"PersonIDType"`
	CountryOfOriginID    int            `json:"CountryOfOriginID" sql:"not null;unique"`
	CountryOfResidenceID int            `json:"CountryOfResidenceID" sql:"not null;unique"`
}

//TableName ...
func (p Person) TableName() string {
	return "xtut_person"
}

// FieldMap ...
func (p *Person) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&p.FirstName: binding.Field{
			Form:     "FirstName",
			Required: true,
		},
		&p.MiddleName: "MiddleName",
		&p.LastName: binding.Field{
			Form:     "LastName",
			Required: true,
		},
		&p.Title:      "Title",
		&p.Occupation: "Occupation",
		&p.DateOfBirth: binding.Field{
			Form:     "DateOfBirth",
			Required: true,
		},
	}
}

// Validate ...
func (p Person) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// IDType ... Different kind of ID that a person can be identify with
type IDType struct {
	models.BaseModel
	Name        string `json:"Name" sql:"not null"`
	Description string `json:"Description" sql:"not null"`
	IssueBy     string `json:"IssueBy"`
}

// TableName ...
func (id IDType) TableName() string {
	return "xtut_id_type"
}

// FieldMap ...
func (id *IDType) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&id.Name: binding.Field{
			Form:     "Name",
			Required: true,
		},
		&id.Description: binding.Field{
			Form:     "Description",
			Required: true,
		},
		&id.IssueBy: binding.Field{
			Form:     "Description",
			Required: true,
		},
	}
}

// PersonIDType ... Person to IdType mapping
type PersonIDType struct {
	models.BaseModel
	PersonID       int       `json:"PersonID" sql:"not null"`
	IDType         int       `json:"IDType" sql:"not null"`
	IDNumber       string    `json:"IDNumber" sql:"not null"`
	DateIssued     time.Time `json:"DateIssued"`
	ExpiryDate     time.Time `json:"ExpiryDate"`
	ScannedPicture []byte    `json:"ScannedPicture"`
	IDTypes        IDType    `gorm:"one2one:xtut_id_type;"`
}

// Validate ...
func (pid PersonIDType) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// TableName ...
func (pid PersonIDType) TableName() string {
	return "xtut_person_id_type"
}

// FieldMap ...
func (pid *PersonIDType) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&pid.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
		&pid.IDType: binding.Field{
			Form:     "IDType",
			Required: true,
		},
		&pid.DateIssued: binding.Field{
			Form:     "DateIssued",
			Required: true,
		},
		&pid.IDNumber: binding.Field{
			Form:     "IDNumber",
			Required: true,
		},
	}
}

// Addresses ... Person/Company addresses
type Addresses struct {
	models.BaseModel
	AddressType       string `json:"AddressType"`
	HouseNo           string `json:"HouseNo"`
	Street            string `json:"Street"`
	Area              string `json:"Area"`
	TownsID           int    `json:"CityTown"`
	RegionStateID     int    `json:"RegionStateID"`
	CountryID         int    `json:"CountryID"`
	PersonID          int    `json:"PersonID"`
	CompanyEntitiesID int    `json:"CompanyEntitiesID"`
}

// Validate ...
func (add Addresses) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// TableName ...
func (add Addresses) TableName() string {
	return "xtut_addresses"
}

// FieldMap ...
func (add *Addresses) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&add.TownsID: binding.Field{
			Form:     "TownsID",
			Required: true,
		},
		&add.RegionStateID: binding.Field{
			Form:     "RegionStateID",
			Required: true,
		},
		&add.CountryID: binding.Field{
			Form:     "CountryID",
			Required: true,
		},
		&add.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
	}
}

// Contacts ... Person/Company contact
type Contacts struct {
	models.BaseModel
	PhoneNo           string `json:"PhoneNo" sql:"not null"`
	PhoneNo2          string `json:"PhoneNo2"`
	PhoneNo3          string `json:"PhoneNo3"`
	Email             string `json:"Email"`
	Website           string `json:"Website"`
	FacebookID        string `json:"FacebookID"`
	PersonID          int    `json:"PersonID"`
	CompanyEntitiesID int    `json:"CompanyEntitiesID"`
}

// Validate ...
func (con Contacts) Validate(req *http.Request, errs binding.Errors) binding.Errors {
	return errs
}

// TableName ...
func (con Contacts) TableName() string {
	return "xtut_contacts"
}

// FieldMap ...
func (con *Contacts) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&con.PhoneNo: binding.Field{
			Form:     "CityTown",
			Required: true,
		},
		&con.Email: binding.Field{
			Form:     "Email",
			Required: true,
		},
		&con.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
	}
}

// CompanyEntities ... Company Details
type CompanyEntities struct {
	models.BaseModel
	RegisteredName  string      `json:"RegisteredName"`
	Addresses       []Addresses `json:"Addresses"`
	Contacts        []Contacts  `json:"Contacts"`
	CountryID       int         `json:"CountryID"`
	ContactPersonID int         `json:"ContactPersonID"`
}

// TableName ...
func (comp CompanyEntities) TableName() string {
	return "xtut_company_entities"
}

// FieldMap ...
func (comp *CompanyEntities) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&comp.RegisteredName: binding.Field{
			Form:     "CityTown",
			Required: true,
		},
		&comp.CountryID: binding.Field{
			Form:     "Email",
			Required: true,
		},
		&comp.ContactPersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
	}
}

// PersonUser ... User and person mapping
type PersonUser struct {
	models.BaseModel
	PersonID int `json:"PersonID"`
	UserID   int `json:"UserID"`
}

// TableName ...
func (perUser PersonUser) TableName() string {
	return "xtut_person_user"
}

// FieldMap ...
func (perUser *PersonUser) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&perUser.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
		&perUser.UserID: binding.Field{
			Form:     "UserID",
			Required: true,
		},
	}
}
