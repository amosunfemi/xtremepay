package utility

import (
	"fmt"

	"github.com/spf13/viper"
)

// ConfigReader ...
type ConfigReader struct {
	ConfigType       string
	FileConfigReader FileConfig
}

// FileConfig ... Not instantiated directly
type FileConfig struct {
	FileName     string
	FilePath     string
	ConfigDetail viper.Viper
}

// InitConfig ...
func (fileConfig *FileConfig) InitConfig(configfilename string, configfilepath string) error {
	viper.SetConfigName(configfilename)
	viper.AddConfigPath(configfilepath)
	err := viper.ReadInConfig() // Find and read the config file
	if err != nil {             // Handle errors reading the config file
		fmt.Println(err)
		//panic(fmt.Errorf("Fatal error config file: %s \n", err))
		return nil
	}
	fileConfig.ConfigDetail = viper.Viper{}
	return nil
}
