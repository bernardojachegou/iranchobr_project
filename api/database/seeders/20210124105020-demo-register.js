const { date } = require("../../src/utils/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("animais_x_lotes", [
      {
        fk_id_animal: null,
        fk_id_lote: null,
        dt_entrada: date(new Date(2000, 12, 12)).iso,
        dt_saida: date(new Date(2020, 12, 12)).iso,
        dt_ultima_movimentacao: date(new Date(2021, 01, 01)).iso,
        ic_bezerro: 1,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("animais_x_lotes", null, {});
  },
};
