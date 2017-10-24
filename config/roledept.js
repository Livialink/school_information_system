const model = require('../models');
/*
model.Role.findOne({ where : {name : 'user'}})
    .then(function(role){ 
        exports.rol =  role.id;
    });
    */
 exports.rol = 1;  
model.Department.findOne({where : { deptCode : 'csc'}})
     .then(function(dept){
       exports.dept =  dept.id;
     });
