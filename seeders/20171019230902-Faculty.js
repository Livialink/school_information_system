'use strict';

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
    return queryInterface.bulkInsert('Faculties',[{
      name : 'Physical Sciences',
      description : 'The scientist sector',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Environmental sciences',
      description : 'the keepers of the universe',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Biological Sciences',
      description : 'The biologists',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Management Sciences',
      description : 'The managers',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Arts',
      description : 'The creative sector',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Law',
      description : 'The givers of justice',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Faculties', null, {});
    
  }
};
