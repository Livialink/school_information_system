'use strict';
const model = require('../models');
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

      model.Student.findById(1).then(function(std){
        model.Course.findById(1).then(function(cour){
            std.addCourse(cour);
        })
        
        model.Course.findById(2).then(function(cour1){
          std.addCourse(cour1);
        })
        model.Course.findById(3).then(function(cour2){
          std.addCourse(cour2);
        });
      })
      
    ]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('enrollment',null,{});
  }
};
