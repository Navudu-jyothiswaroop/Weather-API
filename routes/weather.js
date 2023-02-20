const express= require('express');
const app=express();
const weatherRoute=require('express').Router();
const {weatherController} = require("../controller/controller")



/**
 * @swagger
 * /api/weatherByCity/getdata?city=Location:
 *                   get:
 *                       summary: Weather Get API
 *                       description: Weather Get API
 *                       parameters:
 *                               - in: path
 *                                 name: city
 *                                 type: string
 *                                 required: true 
 *                       responses:
 *                           200:
 *                               description: To get Weather Info             
 */

weatherRoute.get('/getdata',weatherController)

module.exports=weatherRoute