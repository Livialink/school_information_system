const repo = require('../repositories/repository_factory');


const School = {
    getFaculties : function(callback){
        repo.user.getFaculties(function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    },

    getDepartments : function(facId,callback){
        repo.user.getDepartment(facId,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    },

    addResult : function(options={},callback){
        repo.result.addResult(options,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err)
            }
        })
    },

    delResult : function(id,callback){
        repo.result.delResult(id,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    },

    listResult : function(cosId, callback){

        repo.result.listResult(cosId,function(err,data){
            if(err === null && data !== false){
                callback(data)
            }else{
                callback(err);
            }
        })
    },

    updateResult : function(id,options={},callback){
        repo.result.updateResult(id,options,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    }


}


module.exports = School;