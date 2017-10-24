const validator = require('express-joi-validator');
const Joi = require('joi');

let addResultSchema = {
    body:{
        score : Joi.number().required(),
        semester : Joi.number().required(),
        CourseId : Joi.number().min(1).required(),
        StudentId : Joi.number().min(1).required()
    }
}

let delResultSchema ={
    query : {
        id : Joi.number().min(1).required()
    }
}

let updateResultSchema = {
    query : {
        id : Joi.number().min(1).required()
    },
    body : {
        score : Joi.number(),
        semester : Joi.number().min(1)
    }
}

module.exports.delResultValidator = validator(delResultSchema);
module.exports.updateResultValidator = validator(updateResultSchema);
module.exports.addResultValidator = validator(addResultSchema);