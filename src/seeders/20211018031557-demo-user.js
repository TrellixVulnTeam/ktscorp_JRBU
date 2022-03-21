'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{

      userName: 'jackforez',
      passWord: '123',
      email: 'jackforez@gmail.com',
      phoneNumber: '0814123456',
      roleID: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};