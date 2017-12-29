'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//rutas
var user_routes = require('./rutes/user');
var animal_routes = require('./rutes/animal');

//configurar middlewares de body-parse
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());


//configurar cabeceras y cors

//rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

//rutas body-parse

app.post('/probando',(req, res)=>{
    res.status(200).send({message: "Este es el metodo probando"});
})

module.exports = app;