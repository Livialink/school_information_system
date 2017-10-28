const model = require('../models');//.Student;

let StudentRepository = function(){

   let get = function(id,callback){
       model.Student.findOne({
           include : [{model : model.User}],
            where : {UserId : id}}).then(user =>{
           callback(null,user);
       }).catch(err =>{
           callback(err,false);
       })
    }

    let save = function(options = {},callback){
        ///return model.sequelize.transaction(function(t){
         model.User.create({
            email : options.email,
            username : options.username,
            password : options.password,
            phone : options.phone,
            address : options.address,
            firstname : options.firstname,
            lastname : options.lastname,
            state : options.state,
            RoleId : options.role
        }/*,{transaction : t}*/).then(function(user){
            model.Student.create({
                level : options.level,
                admittedDate : options.date,
                UserId : user.id,
                DepartmentId : options.deptId
            }).then(function(std){ callback(null,std)})
            .catch(function(err){ callback(err,false)});
        }).catch(function(err){ callback(err,false) });
    }

    let remove = function(id,callback){
        model.User.destroy({where :{ id : id}})
        .then(function(rows){
            callback(null,rows);
        }).catch(function(err){
            callback(err,false);
        })
    }

    let list = function(options = {level:200},callback){
        model.Role.findOne({where : { name : 'user'}}).then(function(role){
            model.User.findAll({
                include : [{ 
                    model : model.Student,
                    where : options
                }],
                where : { RoleId : role.id}
            }).then(users => callback(null,users))
            .catch(err => callback(err,false));
        }).catch(err => callback(err,false));
    }

    let update = function(options={},callback){
        //callback(null,{user:'Livinus'});
        
        model.User.findById(options.id).then(user =>{
            user.firstname = options.firstname;
            user.lastname = options.lastname;
            user.password = options.password;
            user.phone = options.phone;
            user.save().then(()=>
            model.Student.findOne({where : {UserId : user.id}}).then(ustd=>{
                ustd.update({level : options.level}).then(function(std){
                    callback(null,{user: user, student: std});
                }).catch(err => callback(err,false))
            }).catch(err => callback(err,false))
            ).catch(err => callback(err,false));
        })
    };

    

    return {
        get : get,
        save : save,
        remove : remove,
        list : list,
        update : update,
    }

}



module.exports = StudentRepository();