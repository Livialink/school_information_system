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
      model.Course.findById(1).then(cos=>{
        model.Result.bulkCreate([
          {score : 82, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1, CourseId : cos.id, StudentId : 1},
          {score : 60, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1, CourseId : cos.id, StudentId : 2},
          {score : 52, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1, CourseId : cos.id, StudentId : 3}
          ])
        }),
       model.Course.findById(2).then(cos=>{
        model.Result.bulkCreate([
          {score : 79, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 1},
          {score : 90, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 2},
          {score : 32, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 3}
        ]);
      }),
      model.Course.findById(3).then(cos=>{
        model.Result.bulkCreate([
          {score : 88, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 1},
          {score : 55, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 2},
          {score : 99, status : false, releaseDate : new Date(),
            publishDate : new Date(), semester : 1,CourseId : cos.id, StudentId : 3}
        ]);
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Results',null,{});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
