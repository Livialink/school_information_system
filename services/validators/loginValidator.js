const validator = require('express-joi-validator');
const Joi = require('joi');

let loginSchema  = {
    body : {
        username : Joi.string().alphanum().required(),
        password : Joi.string().required()
     }
}

module.exports = validator(loginSchema);