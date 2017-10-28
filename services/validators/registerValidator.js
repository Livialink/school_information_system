const validator = require('express-joi-validator');
const Joi = require('joi');

let registerStdSchema  = {
    body : {
        username : Joi.string().alphanum().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required(),
        phone : Joi.number().required(),
        address : Joi.string().required(),
        firstname : Joi.string().alphanum().required(),
        lastname : Joi.string().alphanum().required(),
        state : Joi.string().alphanum().required(),
        level : Joi.number().required(),
        date : Joi.date().required(),
        deptId : Joi.number(),
        role : Joi.string().required()
    }
}
let registerAdmSchema = {
    body : {
        username : Joi.string().alphanum().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required(),
        phone : Joi.number().required(),
        address : Joi.string().required(),
        firstname : Joi.string().alphanum().required(),
        lastname : Joi.string().alphanum().required(),
        state : Joi.string().alphanum().required()
    }
}

let studentDelSchema = {
    query : {
        id : Joi.number().min(1).required()
    }
}

let stdListValidator = {
    query : {
        level : Joi.number().min(100).max(700).required()
    }
}

let stdUpdValidator = {
    body : {
        id : Joi.number().min(0).required(),
        level : Joi.number().min(100).max(700).required(),
        firstname : Joi.string().required(),
        lastname : Joi.string().required(),
        password : Joi.string().required(),
        phone : Joi.number().required()
    }
}

module.exports.stdUpdValidator = validator(stdUpdValidator)
module.exports.stdListvalidator = validator(stdListValidator);
module.exports.stddelValidator = validator(studentDelSchema);
module.exports.regValidator = validator(registerStdSchema); 
module.exports.regAdminValidator = validator(registerAdmSchema);