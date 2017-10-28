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
          description : '100',
          creditUnit : 2,
          courseCode : 'CSC101',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Algorithm',
          description : '200',
          creditUnit : 2,
          courseCode : 'CSC213',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Database Management',
          description : '200',
          creditUnit : 2,
          courseCode : 'CSC203',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Software Engineering',
          description : '300',
          creditUnit : 3,
          courseCode : 'CSC303',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Data Management and Networking',
          description : '300',
          creditUnit : 3,
          courseCode : 'CSC313',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Systems Analysis',
          description : '300',
          creditUnit : 3,
          courseCode : 'CSC351',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Artificial Intelligence',
          description : '400',
          creditUnit : 2,
          courseCode : 'CSC451',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Expert System',
          description : '400',
          creditUnit : 2,
          courseCode : 'CSC452',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Computer Graphics',
          description : '400',
          creditUnit : 3,
          courseCode : 'CSC463',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Operating System',
          description : '300',
          creditUnit : 2,
          courseCode : 'CSC323',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Digial Design I',
          description : '200',
          creditUnit : 3,
          courseCode : 'CSC225',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'csc'}}).then(dept =>{
        model.Course.create({
          name : 'Digital Design II',
          description : '300',
          creditUnit : 3,
          courseCode : 'CSC311',
          DepartmentId : dept.id
        })
      }),

      model.Department.findOne({where : { deptCode : 'mat'}}).then(dept =>{
        model.Course.create({
          name : 'Linear Algebra 1',
          description : '200',
          creditUnit : 3,
          courseCode : 'MAT201',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'mat'}}).then(dept =>{
        model.Course.create({
          name : 'Linear Algebra II',
          description : '200',
          creditUnit : 3,
          courseCode : 'MAT203',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'mat'}}).then(dept =>{
        model.Course.create({
          name : 'Ordinary Differential Equation',
          description : '200',
          creditUnit : 3,
          courseCode : 'MAT202',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'mat'}}).then(dept =>{
        model.Course.create({
          name : 'Discrete Mathematics',
          description : '300',
          creditUnit : 3,
          courseCode : 'MAT303',
          DepartmentId : dept.id
        })
      }),
      model.Department.findOne({where : { deptCode : 'mat'}}).then(dept =>{
        model.Course.create({
          name : 'Optimization Theory',
          description : '300',
          creditUnit : 3,
          courseCode : 'MAT351',
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
