const { date } = require("../../src/utils/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("animais_lotes", [
      {
        no_lote: "Fazenda Ramos",
        ds_lote: "descrição do lote 1",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Fazenda Vida Nova",
        ds_lote: "descrição do lote 2",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Fazenda dos Reis ",
        ds_lote: "descrição do lote 3",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("animais_lotes", null, {});
  },
};
