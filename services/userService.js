const repo  = require('../repositories/repository_factory');

let User = {
    activateStudent : function(userId,callback){
        repo.user.activateUser(userId,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    },
    getRoleId : function(name,callback){
        repo.user.getRoleId(name,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    }
    ,
    getAdmins : function(callback){
        repo.user.getAdmins(function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        });
    },
    
    registerAdmin : function(options,callback){
        repo.user.registerAdmin(options,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(err);
            }
        })
    }
}


module.exports = User;