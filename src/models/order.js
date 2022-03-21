'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    ordernumber: DataTypes.STRING,
    userid: DataTypes.STRING,
    status: DataTypes.STRING,
    receivername: DataTypes.STRING,
    receiveraddress: DataTypes.STRING,
    receiverphone: DataTypes.STRING,
    cod: DataTypes.STRING,
    note: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};