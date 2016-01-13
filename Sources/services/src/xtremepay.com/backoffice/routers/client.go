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
	"xtremepay.com/backoffice/utility"
)

//ClientRouter ...
type ClientRouter struct {
	ServiceList map[string]string
	Logger      *utility.LogManager
}

// Routing ... list of routing services
func (client ClientRouter) Routing(router *mux.Router, apiprefix string) {
	clientController := controllers.ClientController{client.ServiceList, client.Logger.Logger}

	//User related client calls
	router.HandleFunc(apiprefix+"/user/login", clientController.LoginUser).Methods("POST")

	router.Handle(apiprefix+"/user/logout",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.LogoutUser),
		)).Methods("GET")

	router.Handle(apiprefix+"/user/refresh-token",
		negroni.New(
			negroni.HandlerFunc(authentication.RequireTokenAuthentication),
			negroni.HandlerFunc(clientController.RefreshUserToken),
		)).Methods("GET")

	//Registration of wallet user
	router.HandleFunc(apiprefix+"/user/registration", clientController.RegisterUser).Methods("POST")

}
