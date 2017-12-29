'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
},{
    versionKey: true//si se quiere eliminar el -v de los esquemas en este caso lo dejo a true para que lo cree
});
module.exports = mongoose.model('User', UserSchema);