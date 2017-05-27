var mongoose = require('../config/db');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    username: { type: String, unique: true },
    password: String
});

UserSchema.index({
    username:1
});

UserSchema.plugin(uniqueValidator);

var user = mongoose.model('user', UserSchema);


module.exports = user;

