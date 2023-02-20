const {createLogger,transports,format}=require('winston');
const winston = require('winston/lib/winston/config');
/*const customFormat = format.combine(format.timestamp(),format.printf((info)=>{
    return `${info.timestamp} - [${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
}))

const logger = createLogger({
    format: customFormat,
    transport: [
        new transports.Console({ level: 'silly'}),
        new transports.File({ filename: 'app.log' })
    ]
});*/
const options ={
    level:"info",
    transports: [
        new transports.Console({
            level: "info",
            colorize: false
        }),
        new transports.File({
            filename:'logs/error.log',
            level: 'info',
            maxsize:5242880,
            colorize:false
        }),
    ]
}
const logger= createLogger(options);

module.exports = logger;