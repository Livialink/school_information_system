'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    
    level: {
      allowNull : false,
      type : DataTypes.STRING
    },
    admittedDate: {
      allowNull : false,
      type : DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Student.associate = function(models){
    //Student <=> User association
    Student.belongsTo(models.User,{
      onDelete : "CASCADE",
      foreignKey : {
        allowNull : false
      }
    });
    //Student <=> Course association
    Student.belongsToMany(models.Course,{through : 'enrollment'});
    //Student <=> Department association
    Student.belongsTo(models.Department);
    //Student <=> Result association
    Student.hasMany(models.Result);

  }
  return Student;
};