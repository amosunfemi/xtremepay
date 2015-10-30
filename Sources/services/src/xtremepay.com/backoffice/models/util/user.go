package util

import "xtremepay.com/backoffice/models"

// User ...
type User struct {
	models.BaseModel
	Realm                string
	Username             string `sql:"not null;unique"`
	Password             string
	Credential           string
	Challenges           string
	Email                string `sql:"not null;unique"`
	Emailverified        bool
	Verificationtoken    string
	LogInCummulative     int
	FailedAttemptedLogin int
	UUID                 string
	PersonID             int
	PhoneNum             string
	VerifiedPhoneNum     string
}

//TableName ...
func (c User) TableName() string {
	return "xtut_user"
}

// Login ...
/*func Login(requestUser *User) (int, []byte) {
	authBackend := authentication.InitJWTAuthenticationBackend()

	if authBackend.Authenticate(requestUser) {
		token, err := authBackend.GenerateToken(requestUser.UUID)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			response, _ := json.Marshal(parameters.TokenAuthentication{token})
			return http.StatusOK, response
		}
	}

	return http.StatusUnauthorized, []byte("")
}

func RefreshToken(requestUser *User) []byte {
	authBackend := authentication.InitJWTAuthenticationBackend()
	token, err := authBackend.GenerateToken(requestUser.UUID)
	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(parameters.TokenAuthentication{token})
	if err != nil {
		panic(err)
	}
	return response
}

func Logout(req *http.Request) error {
	authBackend := authentication.InitJWTAuthenticationBackend()
	tokenRequest, err := jwt.ParseFromRequest(req, func(token *jwt.Token) (interface{}, error) {
		return authBackend.PublicKey, nil
	})
	if err != nil {
		return err
	}
	tokenString := req.Header.Get("Authorization")
	return authBackend.Logout(tokenString, tokenRequest)
}*/
