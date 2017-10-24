const validator = require('express-joi-validator');
const Joi = require('joi');

let cosSchema = {
    body : {
        stdId : Joi.number().min(100).required(),
        cosIds : Joi.array().required()
    }
}
let enrollSchema = {
    query : {
        cosId : Joi.number().min(1).required()
    }
}
module.exports.enrollmentValidator = validator(enrollSchema)
module.exports.enrollValidator = validator(cosSchema)