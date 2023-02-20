const express= require('express');
const mongoose = require('mongoose');
const app=express();
const bodyParser = require('body-parser');
const weatherRoute = require('./routes/weather');
const logger = require('./logger');
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const options = {
    definition: {
        openapi: '3.0.0',
        info : {
            title: 'Weather API',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['./routes/weather.js']
}



const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.use('/api/weatherByCity',weatherRoute)
app.listen(5000,()=>{
    logger.info('application running')
    console.log("Server is running in PORT "+5000);
})