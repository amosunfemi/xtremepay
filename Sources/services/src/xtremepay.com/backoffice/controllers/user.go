package controllers

import (
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/mholt/binding"
	"github.com/pborman/uuid"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//UserController ...
type UserController struct {
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
	DataStore    utility.DataStore
}

// genericSearch ... Search for any type
func (u UserController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := u.HTTPUtilDunc.DecodeHTTPBody(req)
	//entities := []interface{}{entity}
	if err == nil {
		_, err := u.DataStore.SearchAnyGenericObject(queryDict, &entity)
		if err != nil {
			return entity, err
		}
	}
	return entity, nil
}

// CreateUser ... add new contact to a person
func (u UserController) CreateUser(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	user := new(models.User)
	errs := binding.Bind(req, user)
	if errs.Handle(res) {
		r.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := user.Validate(req, errs)
	if bindingErr != nil {
		r.JSON(res, 422, bindingErr.Error())
		return
	}
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	user.Password = string(hashedPassword)
	p := models.User{u.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
		user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	err := u.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	p.Password = ""
	// render response
	r.JSON(res, 200, p)
}
