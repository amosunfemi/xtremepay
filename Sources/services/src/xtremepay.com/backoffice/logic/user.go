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
	"xtremepay.com/backoffice/utility"
)

//UserLogic ...
type UserLogic struct {
	ServiceList        map[string]string
	Logger             log.Logger
	AuthorizationToken string
}

//RegisterUser ... Register a new user by creating his record as a Person and also as a user.
//If Contact is not attached to a person, extract it from user detail and create a contact object
func (usrlogic *UserLogic) RegisterUser(person models.Person, user models.User) (interface{}, interface{}, error) {
	var err error
	restfulds := dataaccess.RESTFul{}
	contact := models.Contacts{}
	if len(person.Contacts) == 0 {
		contact.Email = user.Email
		contact.PhoneNo = user.PhoneNum
	}
	person.Contacts = append(person.Contacts, contact)
	restfulds.ServiceURI = usrlogic.ServiceList["utility"]
	restfulds.Logger = usrlogic.Logger
	savedEntity, statusCode, err := restfulds.SaveObject(person, "person")
	if statusCode != 0 {
		return nil, nil, err
	}
	savedPerson := savedEntity.(map[string]interface{})
	restfulds.ServiceURI = usrlogic.ServiceList["auth"]

	user.PersonID = int(savedPerson["ID"].(float64))
	user.Verificationtoken = utility.RandStr(6, "number")
	user.BaseModel.Status = "UNACTIVATED"
	user.Emailverified = true
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

// ChangePassword ... Update user's password, status etc
func (usrlogic *UserLogic) ChangePassword(changedValue string) (interface{}, bool, error) {
	var err error
	restfulds := dataaccess.RESTFul{}
	restfulds.ServiceURI = usrlogic.ServiceList["auth"]
	savedEntity, statusCode, err := restfulds.UpdateObjectAuthToken(changedValue, "user/changepassword", usrlogic.AuthorizationToken)
	if statusCode != 0 {
		usrlogic.Logger.Error(err.Error())
		return nil, false, err
	}
	return savedEntity, true, nil
}

// ActivateUser ... Activate user with the token sent to the user
func (usrlogic *UserLogic) ActivateUser(userDetail string) (interface{}, bool, error) {
	var err error
	restfulds := dataaccess.RESTFul{}
	restfulds.ServiceURI = usrlogic.ServiceList["auth"]
	savedEntity, statusCode, err := restfulds.UpdateObject(userDetail, "user/activate")
	if statusCode != 0 {
		usrlogic.Logger.Crit(err.Error())
		return nil, false, err
	}
	return savedEntity, true, nil
}

// AddNewAddressToUser ... Update user's password, status etc
func (usrlogic *UserLogic) AddNewAddressToUser(address models.Addresses) (interface{}, bool, error) {
	var err error
	restfulds := dataaccess.RESTFul{}
	restfulds.ServiceURI = usrlogic.ServiceList["utility"]
	savedEntity, statusCode, err := restfulds.SaveObjectAuthToken(address, "address", usrlogic.AuthorizationToken)
	if statusCode != 0 {
		usrlogic.Logger.Error(err.Error())
		return nil, false, err
	}
	return savedEntity, true, nil
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
