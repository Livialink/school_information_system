const model = require('../models');

let course_repository =  function(){

    let getById = function(id,callback){
        model.Course.findById(id).then(cos => callback(null,cos))
        .catch(err => callback(err,false));
    };
    
    let getByName = function(name,callback){
        model.Course.findOne({where : { name : name}}).then(cos =>{
            callback(null,cos);
        }).catch(err => callback(err,false));
    };

    let getByCode = function(code,callback){
        model.Course.findOne({where : { courseCode : code}})
        .then(cos => callback(null,cos))
        .catch(err => callback(err,false));
    };

    let add = function(options = {},callback){
         model.Course.create(options).then(cos => callback(null,cos))
        .catch(err => callback(err,false));
    };

    let enroll = function(stdId,courseIds=[],callback){
        model.Student.findById(stdId).then(function(std){
         let promise =  courseIds.map((value)=>{
                return model.Course.findById(value).then(function(cous){
                  return std.addCourse(cous)
                  .then(cos => {return cos})
                  .catch(err => callback(err,false))
            }).catch(err => callback(err,false))})
            Promise.all(promise).then(function(result){
                    callback(null,result);
            }).catch(err => callback(err,false))
        }).catch(err => callback(err,false))
    };

    let enrollments = function(id,callback){
        model.Course.findById(id).then(cos =>{
            cos.getStudents().then(stds =>{
                var prom =stds.map(std =>{ 
                    return std.getUser().then(user => {return user})
                    .catch(err => callback(err,false)) 
                    })
                Promise.all(prom).then(result =>{
                    callback(null,result)
                })
            }).catch(err => callback(err,false))
        }).catch(err => callback(err,false));
    };


    return {
        getById : getById,
        getByName : getByName,
        getByCode : getByCode,
        add : add,
        enroll : enroll,
        enrollments :enrollments
    }
};

module.exports = course_repository();