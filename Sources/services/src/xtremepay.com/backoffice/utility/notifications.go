package utility

import (
	"gopkg.in/gomail.v2"
)

//Notification ... Notification struct for creating notifications
type Notification struct {
	NotificationType string //type of notification e.g. email, sms, mobile push message
	Message          string
	Receipients      string
	Sender           string
	Status           int // status of the message, 0 = Delivered, -1 = Failed,
	Subject          string
	ContentType      string
	NotEngine        NotificationEngine
}

//SendNotification ...
func (not *Notification) SendNotification() error {

	return nil
}

//NotificationEngine ...
type NotificationEngine interface {
	Send() error
	GetNotification() Notification
}

//GenericNotificationEngine ...
type GenericNotificationEngine struct {
}

//Send ...
func (gen *GenericNotificationEngine) Send() {

}

//GetNotification ...
func (gen *GenericNotificationEngine) GetNotification() *Notification {
	return new(Notification)
}

//EmailEngine ...
type EmailEngine struct {
	GenericNotificationEngine
	SMTPServer string
	Username   string
	Password   string
	Port       int
	GOMail     *gomail.Message
}

//Send ...
func (mail *EmailEngine) Send() error {
	mail.GOMail = gomail.NewMessage()
	notificationMsg := mail.GenericNotificationEngine.GetNotification()
	mail.GOMail.SetHeader("From", notificationMsg.Sender)
	mail.GOMail.SetHeader("To", notificationMsg.Receipients)
	//mail.GOMail.SetAddressHeader("Cc", cc)
	mail.GOMail.SetHeader("Subject", notificationMsg.Subject)
	mail.GOMail.SetBody(notificationMsg.ContentType, notificationMsg.Message)
	//mail.GOMail.Attach(attachedFile)

	d := gomail.NewPlainDialer(mail.SMTPServer, mail.Port, mail.Username, mail.Password)

	if err := d.DialAndSend(mail.GOMail); err != nil {
		return err
	}
	return nil
}
