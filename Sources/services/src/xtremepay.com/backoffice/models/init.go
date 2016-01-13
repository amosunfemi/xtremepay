package models

import (
	"time"
)

//BaseModel ...
type BaseModel struct {
	ID        int        `json:"ID"`
	CreatedAt time.Time  `sql:"timestamp with time zone DEFAULT ('now'::text)::date", json:"CreatedAt"`
	UpdatedAt time.Time  `json:"DeletedAt"`
	DeletedAt *time.Time `json:"DeletedAt"`
	Status    string     `json:"Status"`
}
