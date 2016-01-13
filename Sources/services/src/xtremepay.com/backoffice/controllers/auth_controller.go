package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/mholt/binding"
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
	requestUser := new(models.User)
	personDetail := new(models.Person)
	errs := binding.Bind(r, requestUser)
	if errs.Handle(w) {
		render.JSON(w, 422, errs.Error())
		return
	}
	user := models.User{}
	//map[string]interface{}{"email": requestUser.Email, "username": requestUser.Username}
	//query := sec.Db.Where("email = ? or username = ?", requestUser.Email, ).Find(&user)
	qryparam := map[string]interface{}{"email": requestUser.Email}
	//orQryparam := map[string]interface{}{"email": requestUser.Email, "username": requestUser.Username}
	_, err := sec.DataStore.SearchAnyGenericObject(qryparam, &user)
	if err != nil && err.ErrNo == 1001 {
		render.JSON(w, 404, err.Error())
	} //else if err == nil {
	//User exist in database, confirm his password
	responseStatus, token := services.Login(&user, requestUser.Password)
	//Get user to person details
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
