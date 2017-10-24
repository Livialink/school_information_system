'use strict';
const model = require('../models');
const sett = require('../config/roledept');
/*sett.role = 1;
sett.dept = 1;*/
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  

     return Promise.all([       
         model.User.build({
            username : 'livinus',
            email : 'livinus@gmail.com',
            password : '12345',
            phone : '703359190',
            address : 'Nzewi street',
            firstname : 'ifunanya',
            lastname : 'umeh',
            state : 'Anambra',
            RoleId : sett.rol
        }).save().then(function(user) {
            model.Student.create({
              level : 200,
              admittedDate : new Date(),
              DepartmentId : sett.dept,
              UserId : user.id
            })
          }),

        
        model.User.create({
          username : 'regina',
          email : 'geemaduemezia@gmail.com',
          password : '12345',
          phone : '00798908',
          address : 'Eldarado street',
          firstname : 'ifeanyi',
          lastname : 'Maduemezia',
          state : 'Delta',
          RoleId : sett.rol
      }).then(function(user) {
          model.Student.create({
            level : 200,
            admittedDate : new Date(),
            DepartmentId : sett.dept,
            UserId : user.id
          })
        }),
        model.User.create({
          username : 'admin',
          email : 'admin@gmail.com',
          password : '12345',
          phone : '007898908',
          address : 'Extago mainland',
          firstname : 'MockingJay',
          lastname : 'Greg',
          state : 'Delta',
          RoleId : sett.rol
      }).then(user => {
          model.Student.create({
            level : 200,
            admittedDate : new Date(),
            DepartmentId : sett.dept,
            UserId : user.id
          })
        })
   ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
