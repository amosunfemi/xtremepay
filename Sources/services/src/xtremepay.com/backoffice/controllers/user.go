package controllers

import (
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/pborman/uuid"
	"github.com/unrolled/render"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//UserController ...
type UserController struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// genericSearch ... Search for any type
func (u UserController) genericSearch(entity interface{}, req *http.Request) (interface{}, error) {
	queryDict, err := u.HTTPUtilDunc.DecodeHTTPBody(req)
	if err == nil {
		query := u.Db.Where(queryDict).Find(entity)
		if query.Error == gorm.RecordNotFound {
			return entity, query.Error
		}
		return entity, nil
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

	p := models.User{u.BaseModel, user.Realm, user.Username, user.Password, user.Credential, user.Challenges, user.Email, user.Emailverified, user.Verificationtoken,
		user.LogInCummulative, user.FailedAttemptedLogin, uuid.New(), user.PersonID, user.PhoneNum, user.VerifiedPhoneNum}

	tx := u.Db.Begin()

	if err := tx.Create(&p).Error; err != nil {
		tx.Rollback()
		panic(err)
	}
	tx.Commit()
	// render response
	r.JSON(res, 200, p)
}
