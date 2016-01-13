package logic

import (
	models "xtremepay.com/backoffice/models/util"
)

// CreateAccount ... Create New Account, ensuring all the business rules are fufilled before creating the account.
/*
To create an account. You do the following:
1. Create the person.
2. Create the customer detail.
3. Create account details. If customer exist before, create a new account, else add the account as a new account for the customer
*/
func CreateAccount(account *models.Account) {

}
