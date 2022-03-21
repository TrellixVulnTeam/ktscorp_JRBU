'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passWord: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING(10)
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      roleID: {
        type: Sequelize.STRING
      },
      costid: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};