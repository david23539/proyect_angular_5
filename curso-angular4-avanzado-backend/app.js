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
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Method', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
})
//rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

//rutas body-parse

app.post('/probando',(req, res)=>{
    res.status(200).send({message: "Este es el metodo probando"});
})

module.exports = app;