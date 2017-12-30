'use strict'
var express = require('express');
var AnimalController = require('../controller/animals');
var md_auth = require ('../middlewares/autenticate');
var api = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./curso-angular4-avanzado-backend/uploads/animals'});

api.get('/pruebas-animales', md_auth.ensureAuth, AnimalController.pruebas);
api.get('/animal', AnimalController.getAnimals);
api.get('/animal/:id', AnimalController.getAnimal);
api.post('/animal', md_auth.ensureAuth, AnimalController.saveAnimal);
api.put('/update-animal/:id', md_auth.ensureAuth, AnimalController.updateAnimal);
api.post('/upload-image-animal/:id', [md_auth.ensureAuth, md_upload], AnimalController.uploadImage);
api.delete('/animal/:id', md_auth.ensureAuth, AnimalController.deleteAnimal);
api.get('/get-image-animal/:imageFile', AnimalController.getImageFile);

module.exports = api;