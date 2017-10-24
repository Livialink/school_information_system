'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    email: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true
    },
    password : {
      allowNull : false,
      type : DataTypes.STRING,
    },
    status : {
      allowNull :false,
      type : DataTypes.BOOLEAN,
      defaultValue : false
    }
    ,
    phone: {
      allowNull : false,
      type : DataTypes.INTEGER
    },
    address: {
      allowNull : false,
      type : DataTypes.STRING
    },
    firstname: {
      allowNull : false,
      type : DataTypes.STRING
    },
    lastname: {
      allowNull : false,
      type : DataTypes.STRING
    },
    state: {
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

  User.associate = function(models){
    User.belongsTo(models.Role,{foreignKey:{ allowNull : false}});//,{through : 'userRole'});
    User.hasOne(models.Student)
  }
  return User;
};