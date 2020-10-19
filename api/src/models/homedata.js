'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HomeData.init({
    temperature: DataTypes.DECIMAL,
    humidity: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'HomeData',
  });
  return HomeData;
};