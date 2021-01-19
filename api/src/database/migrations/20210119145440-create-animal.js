"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("animal", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fk_id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pessoa",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_fazenda: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      no_animal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      vr_peso: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      dt_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
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
    await queryInterface.dropTable("animal");
  },
};
