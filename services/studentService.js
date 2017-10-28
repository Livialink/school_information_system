const repo = require('../repositories/repository_factory');

let Student = {
    getStudent : function(id,callback){
       repo.student.get(id,function(err,data){
           if(err === null && data !== false){
               callback(data);
           }else{
               callback(err);
           }
        });
    },

    addStudent : function(options={},callback){
        repo.user.getRoleId(options.role,function(er,dat){
           if(er === null && dat !== false){
            options.role = dat;
                repo.student.save(options,function(err,data){
                    if(err === null && data !== false){
                        callback(data);
                    }else{
                        callback(err);
                    }
                })
            }else{
                callback(er);
            }
        });
    },

    removeStudent : function(id,callback){
        repo.student.remove(id,function(err,data){
            if(err === null && data > 0){
                callback(data);
            }else{
                callback(err);
            }
        })  
    },

    listStudent : function(queryObj,callback){
        repo.student.list(queryObj,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(null);
            }
            
        })
    },

    updateStd : function(options={},callback){
        repo.student.update(options,function(err,data){
            if(err === null && data !== false){
                callback(data)
            }else{
                callback(null);
            }
        })
    },

    enrollCos : function(stdId,cosIds,callback){
        repo.course.enroll(stdId,cosIds,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(null);
            }
        })
    },

    getEnrollments : function(cosId,callback){
        repo.course.enrollments(cosId,function(err,data){
            if(err === null && data !== false){
                callback(data);
            }else{
                callback(null);
            }
        })
    }

}

module.exports = Student;