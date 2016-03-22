package utility

import (
	"os"
)

import log "gopkg.in/inconshreveable/log15.v2"

// LogManager ...
type LogManager struct {
	LogContext string
	ErrorFile  string
	InfoFile   string
	CritFile   string
	DebugFile  string
	LogDir     string
	Logger     log.Logger
}

// InitLog ...
func (logM *LogManager) InitLog() {

	var svrlog = log.New(logM.LogContext, logM.LogContext)
	svrlog.SetHandler(log.MultiHandler(log.StreamHandler(os.Stderr, log.LogfmtFormat()),
		log.LvlFilterHandler(log.LvlError, log.Must.FileHandler(logM.LogDir+logM.ErrorFile, log.JsonFormat())),
		log.LvlFilterHandler(log.LvlInfo, log.Must.FileHandler(logM.LogDir+logM.InfoFile, log.JsonFormat())),
		log.LvlFilterHandler(log.LvlCrit, log.Must.FileHandler(logM.LogDir+logM.CritFile, log.JsonFormat())),
		log.LvlFilterHandler(log.LvlDebug, log.Must.FileHandler(logM.LogDir+logM.DebugFile, log.JsonFormat()))))

	logM.Logger = svrlog

}
