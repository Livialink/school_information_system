const model = require('../models');


const ResultRepository = function(){

    let addResult = function(options={},callback){
        model.Result.bulkCreate([options]).then(() =>{
            return model.Result.findAll();
        }).then(result=>{
            callback(null,result);
        }).catch(err => callback(err,false));
    };

    let delResult = function(id,callback){
        model.Result.destroy({where : {id : id}})
        .then(row =>{
            callback(null,row);
        }).catch(err => callback(err,false));
    };

    let listResult = function(cosId,callback){        
        model.Course.findOne({
            include :[{ model: model.Result }],
            where : { id : cosId }
        }).then(result => callback(null,result))
        .catch(err => callback(err,false));
    }

    let updateResult = function(id,options={},callback){
        model.Result.findById(id).then(result =>{
            result.score = isNaN(options.score) ? result.score : options.score;
            result.semester = isNaN(options.semester) ? result.semester : options.semester;       
            result.save()
            callback(null,result);
         }).catch(err => callback(err,false))
    }

    return {
        addResult : addResult,
        delResult : delResult,
        listResult : listResult,
        updateResult : updateResult
    }
}


module.exports = ResultRepository();