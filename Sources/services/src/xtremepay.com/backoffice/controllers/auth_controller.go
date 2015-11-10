package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/mholt/binding"
	"github.com/unrolled/render"

	services "xtremepay.com/backoffice/logic"
	models "xtremepay.com/backoffice/models/util"
)

// Login ...
func Login(w http.ResponseWriter, r *http.Request) {

	render := render.New(render.Options{})
	requestUser := new(models.User)
	errs := binding.Bind(r, requestUser)
	if errs.Handle(w) {
		render.JSON(w, 422, errs.Error())
		return
	}
	responseStatus, token := services.Login(requestUser)
	render.JSON(w, responseStatus, token)

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
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	} else {
		w.WriteHeader(http.StatusOK)
	}
}
