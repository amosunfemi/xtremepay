package merchant_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	"testing"
)

func TestMerchant(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Merchant Suite")
}
