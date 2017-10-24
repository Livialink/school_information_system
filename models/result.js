'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    score: {
      allowNull : false,
      type : DataTypes.INTEGER
    },
    status: {
      allowNull : false,
      type :DataTypes.BOOLEAN
    },
    releaseDate:{
      allowNull : false,
      type: DataTypes.DATE
    },
    publishDate: {
      allowNull : false,
      type : DataTypes.DATE
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
  }
  return Result;
};