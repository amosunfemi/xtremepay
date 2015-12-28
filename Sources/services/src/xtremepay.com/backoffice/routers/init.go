package routers

import (
	"fmt"
	"net/http"

	"github.com/albrow/negroni-json-recovery"
	"github.com/ant0ine/go-json-rest/rest"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
)

//BaseRouter ... The router that determines the web-server to which the routes will be tied to. This allow for plugin in better golang web-server as new websevers are released.
type BaseRouter struct {
	MuxRouter     *mux.Router
	APIRouter     *rest.App
	NegroniServer *negroni.Negroni
	APIServer     *rest.Api
	APIPrefix     string
	WebServer     string
}

type handlerFunc func(http.ResponseWriter, *http.Request, http.HandlerFunc)

//InitWebServer ... Initialize a web server based on the configuration
func (base *BaseRouter) InitWebServer(port int, router interface{}) error {
	var err error
	if base.WebServer == "negroni" {
		base.MuxRouter = mux.NewRouter()
		base.NegroniServer = negroni.New(negroni.NewLogger())
		base.NegroniServer.Use(recovery.JSONRecovery(true))
		base.NegroniServer.UseHandler(base.MuxRouter)
		base.NegroniServer.Run(fmt.Sprintf(":%d", port))
	}
	if base.WebServer == "ant0ine" {
		base.APIServer = rest.NewApi()
		base.APIServer.Use(rest.DefaultDevStack...)
	}
	return err
}

//Routing ...
func (base *BaseRouter) Routing(routes ...map[string]interface{}) {
	if base.WebServer == "negroni" {
		for i := range routes {
			url := routes[i]["url"].(string)
			method := routes[i]["method"].(string)
			funct := routes[i]["func"].([]handlerFunc)

			base.MuxRouter.Handle(base.APIPrefix+url,
				negroni.New(
					negroni.HandlerFunc(funct[0]),
					negroni.HandlerFunc(funct[1]),
				)).Methods(method)
		}
	}
}

/*func processHandlerFunction(funct ...handlerFunc) *negroni.Negroni {
	negroniHandlerArray := []negroni.Handler{}

	for j := range funct {
		negroniHandlerArray = append(negroniHandlerArray, negroni.HandlerFunc(funct[j]))
	}
	n := negroni.New(negroniHandlerArray)
	return n
}*/
