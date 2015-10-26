package main_test

import (
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/spf13/viper"
	. "xtremepay.com/backoffice"
)

var _ = Describe("Server", func() {
	var (
		serviceManager = ServiceManager{}
	)

	BeforeEach(func() {

		router := mux.NewRouter()
		n := negroni.New(negroni.NewLogger())
		viperConfig := viper.New()
		serviceManager.NegroniServer = n
		serviceManager.ViperConfig = viperConfig
		serviceManager.Router = router
		serviceManager.LoadConfig("config_test.json")
	})

	Describe("Start merchant microservice", func() {
		Context("Read the configuration", func() {
			It("Read the config. details", func() {
				Expect(serviceManager.ViperConfig.Get("service.mode")).To(Equal("test"))
			})
		})

	})

	Describe("Start the micro-service", func() {
		Context("Connect to the database", func() {
			It("Read the config. details", func() {
				Expect(serviceManager.LoadService()).To(Equal("service started"))
			})
		})
	})
})
