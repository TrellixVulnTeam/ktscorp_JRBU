'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Costs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      minW: {
        type: Sequelize.STRING
      },
      maxW: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('Cost');
  }
};