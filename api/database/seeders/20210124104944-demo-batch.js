const { date } = require("../../src/utils/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("animais_lotes", [
      {
        no_lote: "Lote de Nelores",
        ds_lote: "descrição do lote 1",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de Angus Machos",
        ds_lote: "descrição do lote 2",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de bezerros",
        ds_lote: "descrição do lote 3",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de Chianinas",
        ds_lote: "descrição do lote 4",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de Brown Swiss",
        ds_lote: "descrição do lote 5",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de recém-chegados",
        ds_lote: "descrição do lote 6",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de testes",
        ds_lote: "descrição do lote 7",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de Devons",
        ds_lote: "descrição do lote 8",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lotes de Fêmeas",
        ds_lote: "descrição do lote 9",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_lote: "Lote de Red Polls",
        ds_lote: "descrição do lote 10",
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("animais_lotes", null, {});
  },
};
