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


}


module.exports = School;