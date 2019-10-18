'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: { // Columbian
      type: DataTypes.STRING,
      required: true
    },
    type: { // Dark Roast
      type: DataTypes.STRING,
      required: true
    }
  }, {});

  Coffee.associate = function (models) {
    // Belong to a shop
    this.belongsTo(models.Shop);
  };

  return Coffee;
};