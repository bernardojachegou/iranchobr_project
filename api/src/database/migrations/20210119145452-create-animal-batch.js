"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("animal_lote", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      no_lote: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ds_lote: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("animal_lote");
  },
};
