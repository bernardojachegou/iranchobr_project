"use strict";

const { date } = require("../../src/utils/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("pessoas", [
      {
        no_pessoa: "Hamilton Gabriel",
        no_email: "ham_gabriel@gmail.com",
        endereco: "Rua Fernando Panches nº 500",
        sexo: "M",
        ic_ativo: false,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_pessoa: "Michel Bernardo",
        no_email: "bernardo@gmail.com",
        endereco: "Rua Manoel de Oliveira nº 130",
        sexo: "M",
        ic_ativo: true,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_pessoa: "Aline Oliva",
        no_email: "adealine@gmail.com",
        endereco: "Rua Santos Paiva nº 221",
        sexo: "F",
        ic_ativo: true,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
      {
        no_pessoa: "Gustavo Moreira",
        no_email: "guga1@gmail.com",
        endereco: "Rua Siqueira Campos nº 110",
        sexo: "M",
        ic_ativo: false,
        createdAt: date(new Date()).iso,
        updatedAt: date(Date.now()).iso,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pessoas", null, {});
  },
};
