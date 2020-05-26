'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    orderid: DataTypes.INTEGER,
    itemid: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    itemname: DataTypes.STRING,
    price: DataTypes.STRING,
    totalamount: DataTypes.STRING
  }, {});
  OrderItems.associate = function(models) {
    // associations can be defined here
  };
  return OrderItems;
};