'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffee = sequelize.define('Coffee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    shopId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Coffee.associate = function(models) {
    // Coffee belongsTo Shop
    Coffee.belongsTo(models.Shop, { foreignKey: 'shopId' });
  };
  return Coffee;
};