'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    score: {
      allowNull : false,
      type : DataTypes.INTEGER
    },
    status: {
      allowNull : false,
      type :DataTypes.BOOLEAN,
      defaultValue : false
    },
    releaseDate:{
      allowNull : false,
      type: DataTypes.DATE,
      defaultValue : new Date()
    },
    publishDate: {
      allowNull : false,
      type : DataTypes.DATE,
      defaultValue : new Date()
    },
    semester: {
      allowNull : false,
      type : DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Result.associate = function(models){
    Result.belongsTo(models.Student);
    Result.belongsTo(models.Course);
  }
  return Result;
};