package util

import "xtremepay.com/backoffice/models"

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
}

//TableName ...
func (c User) TableName() string {
	return "xtut_user"
}
