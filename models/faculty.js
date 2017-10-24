'use strict';
module.exports = (sequelize, DataTypes) => {
  var Faculty = sequelize.define('Faculty', {
    name: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    description: {
      allowNull : false,
      type : DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Faculty;
};