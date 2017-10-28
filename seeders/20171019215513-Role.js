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
    model.sequelize.sync({force : true});
    
    return queryInterface.bulkInsert('Roles',[
      {
        name : 'user',
        slug : 'registered user',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'admin',
        slug : 'system admin',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Roles', null, {});
    
  }
};
