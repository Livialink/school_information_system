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
      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Introduction to Computer',
          description : 'The very beginning course',
          creditUnit : 2,
          courseCode : 'CSC101',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Algorithm',
          description : 'The very beginning course',
          creditUnit : 3,
          courseCode : 'CSC103',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Complex Analysis',
          description : 'The very beginning course',
          creditUnit : 3,
          courseCode : 'CSC114',
          DepartmentId : dept.id
        })
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
