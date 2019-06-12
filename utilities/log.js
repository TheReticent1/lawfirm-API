"use strict";
const winston = require("winston");
const timeFormat = ()=> new Date().toLocaleDateString();

let logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      colorize: true,
      timestamp: true
    }),
    new winston.transports.File({
      name: "error",
      filename: "./logs/errors.log",
      level: "error",
      timestamp: timeFormat,
      handleExceptions: true
    }),
    new winston.transports.File({
      name: "server",
      filename: "./logs/server.log",
      level: "info",
      timestamp: timeFormat
    })
  ],
  exitOnError: false
});

//created a morgan middleware method to combine winston loggs
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
