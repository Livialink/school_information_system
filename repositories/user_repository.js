const model = require('../models');


let UserRepository = function(){

    let getUserRole = function(userId,callback){
        model.User.findById(userId).then(user =>{
            user.getRole().then(role =>{
                callback(null,role.name);
            }).catch(err => callback(err,false))
        }).catch(err => callback(err,false));
    };

    let activateUser = function(userId,callback){
        model.User.findById(userId).then(user =>{
            user.status = true;
            user.save();
            callback(null,user);
        }).catch(err => callback(err,false));
    };

    let getAdmins = function(callback){
        model.Role.findOne({where: {name : 'admin'}}).then(role =>{
            role.getUser().then(users =>{
                callback(null,users);
            }).catch(err => callback(err,false))
        }).catch(err => callback(err,false));
    };


    let registerAdmin = function(options={},callback){
        model.Role.findOne({where : { name : 'admin'}}).then(role =>{
            Object.assign(options,{RoleId :role.id});
            model.User.create(options).then(user =>{
                    callback(null,user);
            }).catch(err => callback(err,'man'))
        }).catch(err => callback(err,'men'));
    };

    let login = function(username,password,callback){
        model.User.findOne({ where : {
             username : username, 
             password : password}
            }).then(user => {
                user.getRole().then(role =>{
                    callback(null,{user: user,role : role.name});
                }).catch(err => callback(err,false));
            }).catch(err => callback(err,false));
    };

    let getFaculties = function(callback){
        model.Faculty.findAll().then(fac =>{
            callback(null,fac);
        }).catch(err => callback(err,false));
    };

    let getDepartment = function(facId, callback){
        model.Department.findAll({where : {FacultyId : facId}})
        .then(dept => {
            callback(null,dept);
        }).catch(err => callback(err,false));
    }

    return {
        getUserRole : getUserRole,
        registerAdmin : registerAdmin,
        login : login,
        getFaculties : getFaculties,
        getDepartment : getDepartment,
        activateUser : activateUser,
        getAdmins : getAdmins
    }
}

module.exports = new UserRepository();