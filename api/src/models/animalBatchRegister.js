module.exports = (sequelize, DataTypes) => {
  const animalBatchRegister = sequelize.define("animal_x_lote", {
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
        model: "animal",
        key: "id",
      },
    },
    fk_id_lote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "animal_lote",
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
  });

  animalBatchRegister.associate = (models) => {
    animalBatchRegister.belongsTo(models.batch, { foreignKey: "fk_id_lote" });
  };

  return animalBatchRegister;
};
