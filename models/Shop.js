'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shop = sequelize.define('Shop', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Shop.associate = function(models) {
    // Shop hasMany Coffees
    Shop.hasMany(models.Coffee);
  };
  return Shop;
};