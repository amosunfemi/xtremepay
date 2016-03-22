/*
Client route. The service that the client interact with.
This client route calls the  client controllers, which passes on the requested task execution to the approprate logic.
*/

package routers

import (
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"xtremepay.com/backoffice/controllers"
	"xtremepay.com/backoffice/security/core/authentication"
	utility "xtremepay.com/backoffice/utility"
)

//ClientRouter ...
type ClientRouter struct {
	ServiceList map[string]string
	Logger      *utility.LogManager
}

// Routing ... list of routing services
func (client ClientRouter) Routing(router *mux.Router, apiprefix string) {
	httpUtilFunc := utility.HTTPUtilityFunctions{}
	clientController := controllers.ClientController{client.ServiceList, httpUtilFunc, client.Logger.Logger}

	//User related client calls
	router.HandleFunc(apiprefix+"/user/login", clientController.LoginUser).Methods("POST")
	router.HandleFunc(apiprefix+"/user/activate", clientController.ActivateUser).Methods("PATCH")

	router.Handle(apiprefix+"/user/logout",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.LogoutUser),
		)).Methods("GET")

	router.Handle(apiprefix+"/user/changepassword",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.ChangePassword),
		)).Methods("PATCH")

	router.Handle(apiprefix+"/person/address",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.AddNewAddressToUser),
		)).Methods("POST")

	router.Handle(apiprefix+"/user/refresh-token",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.RefreshUserToken),
		)).Methods("GET")

	//Registration of wallet user
	router.HandleFunc(apiprefix+"/user/registration", clientController.RegisterUser).Methods("POST")

}
