module.exports = (sequelize, DataTypes) => {
  const register = sequelize.define(
    "register",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fk_id_animal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "animais",
          key: "id",
        },
      },
      fk_id_lote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "animais_lotes",
          key: "id",
        },
      },
      dt_entrada: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      dt_saida: {
        type: DataTypes.DATE,
      },
      dt_ultima_movimentacao: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      ic_bezerro: {
        type: DataTypes.INTEGER,
      },
    },
    { tableName: "animais_x_lotes" }
  );

  register.associate = (models) => {
    register.belongsTo(models.batch, { foreignKey: "fk_id_lote" });
    register.belongsTo(models.animal, { foreignKey: "fk_id_animal" });
  };

  return register;
};
