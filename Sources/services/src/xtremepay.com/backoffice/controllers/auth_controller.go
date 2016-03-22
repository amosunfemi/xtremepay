package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/unrolled/render"

	services "xtremepay.com/backoffice/logic"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//SecurityController ...
type SecurityController struct {
	BaseModel    base.BaseModel
	DataStore    utility.DataStore
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// Login ...
func (sec *SecurityController) Login(w http.ResponseWriter, r *http.Request) {
	render := render.New(render.Options{})
	queryDict, errReq := sec.HTTPUtilDunc.DecodeHTTPBody(r)
	qryparam := map[string]interface{}{}
	if errReq != nil {
		//u.Logger.Error(errReq.Error())
		panic(errReq)
	}
	username, usrExists := queryDict["Username"].(string)
	password, exists := queryDict["Password"].(string)
	email, emailExists := queryDict["Email"].(string)
	personDetail := new(models.Person)
	if !exists {
		render.JSON(w, 422, map[string]interface{}{"msg": "Invalid Data"})
		return
	}
	user := models.User{}
	if usrExists {
		qryparam["username"] = username
	}
	if emailExists {
		qryparam["email"] = email
	}
	_, err := sec.DataStore.SearchAnyGenericObject(qryparam, &user)
	if err != nil && err.ErrNo == 1001 {
		if err != nil && err.ErrNo == 1001 {
			render.JSON(w, 404, err.Error())
			return
		}
	}
	responseStatus, token := services.Login(&user, password)
	//Get user to person details
	if responseStatus == 401 {
		render.JSON(w, responseStatus, map[string]interface{}{"msg": "Unauthorized"})
		return
	}
	userPersonParam := map[string]interface{}{"id": &user.PersonID}
	_, errUserPerson := sec.DataStore.SearchAnyGenericObject(userPersonParam, &personDetail)
	if errUserPerson != nil {
		render.JSON(w, 422, errUserPerson.Error())
	}
	personJSON, _ := json.Marshal(personDetail)
	render.JSON(w, responseStatus, map[string]interface{}{"token": string(token), "user_detail": string(personJSON)})

}

// RefreshToken ...
func RefreshToken(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	w.Header().Set("Content-Type", "application/json")
	w.Write(services.RefreshToken(requestUser))
}

// Logout ...
func Logout(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {

	err := services.Logout(r)
	if err != nil {
		fmt.Println(err.Error())
	}
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	} else {
		w.WriteHeader(http.StatusOK)
	}
}
