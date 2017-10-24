'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
    name: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    deptCode: {
      allowNull : false,
      type : DataTypes.STRING
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

  Department.associate = function(models){
    //Department <=> Student association
    Department.hasMany(models.Student);
    Department.belongsTo(models.Faculty);
    Department.hasMany(models.Course);
  }
  return Department;
};