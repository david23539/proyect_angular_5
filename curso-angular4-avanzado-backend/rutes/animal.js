'use strict'
var express = require('express');
var AnimalController = require('../controller/animals');
var md_auth = require ('../middlewares/autenticate');
var api = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./curso-angular4-avanzado-backend/uploads/animals'});

api.get('/pruebas-animales', md_auth.ensureAuth, AnimalController.pruebas);

module.exports = api;