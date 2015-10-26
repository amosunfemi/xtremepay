package models

import (
	"time"
)

//BaseModel ...
type BaseModel struct {
	ID        int			`json:"ID"`
	Createdat time.Time 	`sql:"timestamp with time zone DEFAULT ('now'::text)::date", json:"Createdat"`
	Updatedat time.Time	`json:"Deletedat"`
	Deletedat *time.Time	`json:"Deletedat"`
	Status    string		`json:"Status"`
}
