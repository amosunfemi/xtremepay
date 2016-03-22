package controllers

import (
	"fmt"
	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/mholt/binding"
	"github.com/pborman/uuid"
	"github.com/unrolled/render"
	log "gopkg.in/inconshreveable/log15.v2"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//UserController ...
type UserController struct {
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
	DataStore    utility.DataStore
	Logger       log.Logger
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
	u.BaseModel.Status = "UNACTIVATED"
	p := models.User{BaseModel: u.BaseModel, Realm: user.Realm, Username: user.Username, Password: user.Password, Credential: user.Credential, Challenges: user.Challenges,
		Email: user.Email, Emailverified: user.Emailverified, Verificationtoken: user.Verificationtoken,
		LogInCummulative: user.LogInCummulative, FailedAttemptedLogin: user.FailedAttemptedLogin, UUID: uuid.New(), PersonID: user.PersonID,
		PhoneNum: user.PhoneNum, VerifiedPhoneNum: user.VerifiedPhoneNum}

	err := u.DataStore.SaveDatabaseObject(&p)
	if err != nil {
		panic(err)
	}
	p.Password = ""
	// render response
	r.JSON(res, 200, p)
}

// ChangePassword ... Update user's password, status etc
func (u UserController) ChangePassword(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	r := render.New(render.Options{})
	queryDict, errReq := u.HTTPUtilDunc.DecodeHTTPBody(req)
	if errReq != nil {
		u.Logger.Error(errReq.Error())
		panic(errReq)
	}
	username, exists := queryDict["Username"]
	qryparam := map[string]interface{}{"username": username.(string)}
	user := new(models.User)
	_, err := u.DataStore.SearchAnyGenericObject(qryparam, &user)
	if err != nil {
		u.Logger.Error(err.Error())
		panic(err)
	}
	password, exists := queryDict["Password"].(string)
	if exists == true && password != "" {
		hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 10)
		errCompare := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
		if errCompare != nil {
			fmt.Println(errCompare)
		}
		err = u.DataStore.UpdateDatabaseObject(user, map[string]interface{}{"updated_at": time.Now(), "password": string(hashedPassword)})
		if err != nil {
			u.Logger.Error(err.Error())
			panic(err)
		}
	}
	user.Password = ""
	// render response
	fmt.Println(user)
	r.JSON(res, 200, user)
}

// ActivateUser ... Activate user with the token sent to the user
func (u UserController) ActivateUser(res http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{})
	queryDict, errReq := u.HTTPUtilDunc.DecodeHTTPBody(req)
	if errReq != nil {
		u.Logger.Error(errReq.Error())
		panic(errReq)
	}
	username, exists := queryDict["Username"]
	qryparam := map[string]interface{}{"username": username.(string)}
	user := new(models.User)
	_, err := u.DataStore.SearchAnyGenericObject(qryparam, &user)
	if err != nil {
		u.Logger.Error(err.Error())
		panic(err)
	}
	activationCode, exists := queryDict["Verificationtoken"].(string)
	if exists == true && activationCode == user.Verificationtoken {
		err = u.DataStore.UpdateDatabaseObject(user, map[string]interface{}{"updated_at": time.Now(), "status": "ACTIVE"})
		if err != nil {
			u.Logger.Error(err.Error())
			panic(err)
		}
	}

	user.Password = ""
	r.JSON(res, 200, user)
}
