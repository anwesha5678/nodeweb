'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderno: DataTypes.STRING,
    customerid: DataTypes.INTEGER,
    paymentmode: DataTypes.STRING,
    totalamount: DataTypes.STRING,
    deletedorderitemid: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};