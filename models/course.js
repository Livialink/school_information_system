'use strict';
module.exports = (sequelize, DataTypes) => {
  var Course = sequelize.define('Course', {
    name: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    description: {
      allowNull : false,
      type : DataTypes.STRING
    },
    creditUnit: {
      allowNull : false,
      type : DataTypes.INTEGER
    },
    courseCode: {
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
  Course.associate = function(models){
    Course.belongsToMany(models.Student,{through : 'enrollment'});
    Course.belongsTo(models.Department);

  }
  return Course;
};