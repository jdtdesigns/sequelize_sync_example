'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: { // Dunkin Donuts
      type: DataTypes.STRING,
      required: true
    }
  }, {});

  Shop.associate = function (models) {
    // Have many coffees
    this.hasMany(models.Coffee);
  };

  return Shop;
};