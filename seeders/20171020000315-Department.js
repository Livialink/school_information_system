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
      model.Faculty.findOne({where : {name : 'Physical Sciences'}}).then(fac =>{
        model.Department.create({
          name : 'Computer Science',
          deptCode : 'csc',
          description : 'software developers',
          FacultyId : fac.id
      })}),
        model.Faculty.findOne({where : {name : 'Physical Sciences'}}).then(fac =>{
        model.Department.create({
          name : 'Mathematics',
          deptCode : 'mat',
          description : 'The resolvers',
          FacultyId : fac.id
      })})
    ])
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Departments', null, {});
    
  }
};
