package utility

import (
	"fmt"

	"github.com/streadway/amqp"
	log "gopkg.in/inconshreveable/log15.v2"
)

//MessageSender ... Send messages via RabbitMQ
type MessageSender struct {
	URLConn          string //"amqp://guest:guest@localhost:5672/"
	QueueName        string //"task_queue"
	Message          string
	Logger           log.Logger
	AMQPConnection   *amqp.Connection
	AMQPChannel      *amqp.Channel
	AMQPQueueDeclare amqp.Queue
}

//Init ... Get the connection and initialize the
func (sender *MessageSender) Init() error {
	conn, err := amqp.Dial(sender.URLConn)
	//failOnError(err, "Failed to connect to RabbitMQ")
	sender.Logger.Crit(fmt.Sprintf("%s: %s", "Failed to connect to RabbitMQ", err.Error()))
	defer conn.Close()
	sender.AMQPConnection = conn

	ch, err := conn.Channel()
	sender.Logger.Crit(fmt.Sprintf("%s: %s", "Failed to open a channel", err.Error()))
	defer ch.Close()
	sender.AMQPChannel = ch

	q, err := ch.QueueDeclare(
		sender.QueueName, // name
		true,             // durable
		false,            // delete when unused
		false,            // exclusive
		false,            // no-wait
		nil,              // arguments
	)
	sender.Logger.Crit(fmt.Sprintf("%s: %s", "Failed to declare a queue", err.Error()))
	sender.AMQPQueueDeclare = q

	if err != nil {
		return err
	}
	return nil

}

//Send ... send message to the queue
func (sender *MessageSender) Send() error {
	err := sender.AMQPChannel.Publish(
		"", // exchange
		sender.AMQPQueueDeclare.Name, // routing key
		false, // mandatory
		false, // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(sender.Message),
		})
	sender.Logger.Info(fmt.Sprintf("[x] Sent %s", sender.Message))
	//log.Printf(" [x] Sent %s", body)
	if err != nil {
		sender.Logger.Crit(fmt.Sprintf("%s: %s", "Failed to publish a message", err.Error()))
		return err
	}
	return nil
}

/*func main() {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	q, err := ch.QueueDeclare(
		"task_queue", // name
		true,         // durable
		false,        // delete when unused
		false,        // exclusive
		false,        // no-wait
		nil,          // arguments
	)
	failOnError(err, "Failed to declare a queue")

	body := "This is a test"
	err = ch.Publish(
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(body),
		})
	log.Printf(" [x] Sent %s", body)
	failOnError(err, "Failed to publish a message")
}*/
