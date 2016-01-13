package controllers

import (
	"io/ioutil"
	"net/http"

	"github.com/mholt/binding"
	"github.com/parnurzeal/gorequest"
	"github.com/unrolled/render"
	log "gopkg.in/inconshreveable/log15.v2"
	services "xtremepay.com/backoffice/logic"
)

//ClientController ...
type ClientController struct {
	ServiceList map[string]string
	Logger      log.Logger
}

var request = gorequest.New()
var userlogic = services.UserLogic{}

//LoginUser ...
func (client *ClientController) LoginUser(w http.ResponseWriter, r *http.Request) {
	render := render.New(render.Options{})
	bs, err := ioutil.ReadAll(r.Body)
	if err != nil {
		render.JSON(w, 422, err.Error())
		return
	}
	resp, body, reqErrs := request.Post(client.ServiceList["auth"] + "/token-auth").Send(string(bs)).End()
	if reqErrs != nil {
		panic(reqErrs)
	}
	render.JSON(w, resp.StatusCode, body)
}

//LogoutUser ...
func (client *ClientController) LogoutUser(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	render := render.New(render.Options{})
	resp, body, reqErrs := request.Get(client.ServiceList["auth"]+"/logout").Set("Authorization", r.Header.Get("Authorization")).End()
	if reqErrs != nil {
		panic(reqErrs)
	}
	render.JSON(w, resp.StatusCode, body)
}

//RefreshUserToken ...
func (client *ClientController) RefreshUserToken(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	render := render.New(render.Options{})
	bs, err := ioutil.ReadAll(r.Body)
	if err != nil {
		render.JSON(w, 422, err.Error())
		return
	}
	resp, body, reqErrs := request.Post(client.ServiceList["auth"] + "/refresh-token-auth").Send(string(bs)).End()
	if reqErrs != nil {
		panic(reqErrs)
	}
	render.JSON(w, resp.StatusCode, body)
}

//RegisterUser ...
func (client *ClientController) RegisterUser(res http.ResponseWriter, req *http.Request) {
	//Extract the models from the request
	render := render.New(render.Options{})
	registeredType := new(services.RegisteredUser)
	errs := binding.Bind(req, registeredType)
	userlogic.ServiceList = client.ServiceList
	userlogic.Logger = client.Logger
	if errs.Handle(res) {
		client.Logger.Crit(errs.Error())
		render.JSON(res, 422, errs.Error())
		return
	}
	bindingErr := registeredType.Validate(req, errs)
	if bindingErr != nil {
		client.Logger.Crit(bindingErr.Error())
		render.JSON(res, 422, bindingErr.Error())
		return
	}

	person, user, err := userlogic.RegisterUser(registeredType.Person, registeredType.User)
	if err != nil {
		client.Logger.Error(err.Error())
		panic(err)
	}
	render.JSON(res, 200, map[string]interface{}{"person": person, "user": user})
}
