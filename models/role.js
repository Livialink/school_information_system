'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    slug: {
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
  
  Role.associate = function(models){
    Role.hasMany(models.User,{foreignKey :{allowNull: false}});//,{through : 'userRole'});
  }
  return Role;
};