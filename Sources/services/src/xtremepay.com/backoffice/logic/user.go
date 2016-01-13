package logic

//RegisterUser ... Create a user that can log on to the system.
/*
1. Create the Person along with Contacts, Addresses
2. Create the User.
*/
import (
	"net/http"
	"strconv"

	"github.com/mholt/binding"
	log "gopkg.in/inconshreveable/log15.v2"
	dataaccess "xtremepay.com/backoffice/dataaccess"
	models "xtremepay.com/backoffice/models/util"
)

//UserLogic ...
type UserLogic struct {
	ServiceList map[string]string
	Logger      log.Logger
}

//RegisterUser ... Register a new user by creating his record as a Person and also as a user.
func (usrlogic *UserLogic) RegisterUser(person models.Person, user models.User) (interface{}, interface{}, error) {
	var err error
	restfulds := dataaccess.RESTFul{}
	//Save Person
	restfulds.ServiceURI = usrlogic.ServiceList["utility"]
	restfulds.Logger = usrlogic.Logger
	savedEntity, statusCode, err := restfulds.SaveObject(person, "person")
	if statusCode != 0 {
		return nil, nil, err
	}
	savedPerson := savedEntity.(map[string]interface{})
	restfulds.ServiceURI = usrlogic.ServiceList["auth"]

	user.PersonID = int(savedPerson["ID"].(float64))
	savedEntity, statusCode, err = restfulds.SaveObject(user, "user")
	if statusCode != 0 {
		//Revert the person saved
		usrlogic.Logger.Crit(err.Error())
		restfulds.ServiceURI = usrlogic.ServiceList["utility"]
		_ = restfulds.DeleteObject("person/" + strconv.Itoa(user.PersonID))
		return nil, nil, err
	}
	savedUser := savedEntity.(map[string]interface{})
	return savedPerson, savedUser, nil
}

//RegisteredUser ... Logical registered user expected from the controller
type RegisteredUser struct {
	Person models.Person
	User   models.User
}

// FieldMap ... Then provide a field mapping (pointer receiver is vital)
func (reguser *RegisteredUser) FieldMap(req *http.Request) binding.FieldMap {
	return binding.FieldMap{
		&reguser.Person: binding.Field{
			Form:     "Person",
			Required: true,
		},
		&reguser.User: binding.Field{
			Form:     "User",
			Required: true,
		},
	}
}

// Validate ...
func (reguser *RegisteredUser) Validate(req *http.Request, errs binding.Errors) binding.Errors {

	return errs
}
