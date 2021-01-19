module.exports = (sequelize, DataTypes) => {
  const batch = sequelize.define("animal_lote", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    no_lote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ds_lote: {
      type: DataTypes.STRING,
    },
  });

  batch.associate = (models) => {
    batch.hasMany(models.animalBatchRegister, { foreignKey: "fk_id_lote" });
  };

  return batch;
};
