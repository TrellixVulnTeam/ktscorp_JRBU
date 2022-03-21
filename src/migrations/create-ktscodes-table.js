'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ktscodes', {
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
      key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
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
    await queryInterface.dropTable('Ktscodes');
  }
};