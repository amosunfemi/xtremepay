package util

import (
	"net/http"

	"github.com/mholt/binding"
	"xtremepay.com/backoffice/models"
)

// User ...
type User struct {
	models.BaseModel
	Realm                string
	Username             string `sql:"not null;unique"`
	Password             string
	Credential           string
	Challenges           string
	Email                string `sql:"not null;unique"`
	Emailverified        bool
	Verificationtoken    string
	LogInCummulative     int
	FailedAttemptedLogin int
	UUID                 string
	PersonID             int
	PhoneNum             string
	VerifiedPhoneNum     string
}

//TableName ...
func (c User) TableName() string {
	return "xtut_user"
}

// FieldMap ...
func (c *User) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&c.Username: binding.Field{
			Form:     "Username",
			Required: true,
		},
		&c.Email: binding.Field{
			Form:     "Email",
			Required: true,
		},
		&c.PersonID: binding.Field{
			Form:     "PersonID",
			Required: true,
		},
		&c.Password: binding.Field{
			Form:     "Password",
			Required: true,
		},
		&c.PhoneNum: binding.Field{
			Form:     "PhoneNum",
			Required: true,
		},
	}
}

// Validate ...
func (c User) Validate(req *http.Request, errs binding.Errors) binding.Errors {

	return errs
}
