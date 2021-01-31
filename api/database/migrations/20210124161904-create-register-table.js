"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("animais_x_lotes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fk_id_animal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "animais",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      fk_id_lote: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "animais_lotes",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      dt_entrada: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dt_saida: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dt_ultima_movimentacao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ic_bezerro: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("animais_x_lotes");
  },
};
