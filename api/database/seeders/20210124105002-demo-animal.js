"use strict";
const { date } = require("../../src/utils/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("animals", [
      {
        fk_id_pessoa: 1,
        id_fazenda: 1,
        no_animal: "Boris",
        no_raca: "Nelore",
        sexo: "M",
        vr_peso: 250,
        dt_nascimento: date(new Date(2000, 12, 12)).iso,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("animals", null, {});
  },
};
