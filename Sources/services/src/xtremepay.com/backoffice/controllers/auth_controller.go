package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/mholt/binding"
	"github.com/unrolled/render"

	services "xtremepay.com/backoffice/logic"
	base "xtremepay.com/backoffice/models"
	models "xtremepay.com/backoffice/models/util"
	"xtremepay.com/backoffice/utility"
)

//SecurityController ...
type SecurityController struct {
	Db           *gorm.DB
	BaseModel    base.BaseModel
	HTTPUtilDunc utility.HTTPUtilityFunctions
}

// Login ...
func (sec *SecurityController) Login(w http.ResponseWriter, r *http.Request) {
	render := render.New(render.Options{})
	requestUser := new(models.User)
	errs := binding.Bind(r, requestUser)
	if errs.Handle(w) {
		render.JSON(w, 422, errs.Error())
		return
	}
	user := models.User{}
	query := sec.Db.Where("email = ? or username = ?", requestUser.Email, requestUser.Username).Find(&user)

	if query.Error == gorm.RecordNotFound {
		render.JSON(w, 404, query.Error.Error())
	} else if query.Error == nil {
		//User exist in database, confirm his password
		responseStatus, token := services.Login(&user, requestUser.Password)
		render.JSON(w, responseStatus, string(token))
	}
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
