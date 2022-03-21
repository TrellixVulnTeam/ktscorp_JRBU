'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // ordernumber: DataTypes.STRING,
      // userid: DataTypes.STRING,
      // status: DataTypes.STRING,
      // senddate: new Date(),
      // receivername: DataTypes.STRING,
      // receiveraddress: DataTypes.BOOLEAN,
      // payment: DataTypes.STRING,
      // note:DataTypes.STRING

      ordernumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      userid: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      receivername: {
        type: Sequelize.STRING,
      },
      receiveraddress: {
        type: Sequelize.STRING,
      },
      receiverphone: {
        type: Sequelize.STRING,
      },
      cod: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Orders');
  }
};