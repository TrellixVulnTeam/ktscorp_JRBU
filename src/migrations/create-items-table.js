'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      // orderID: DataTypes.STRING,
      // itemName: DataTypes.STRING,
      // quantyti: DataTypes.INTEGER,
      // price: DataTypes.STRING,

      orderID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      itemName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantyti: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};