'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fields', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 0 }
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: -180, max: 180 }
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: -90, max: 90 }
      },
      farms_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fields')
  }
};
