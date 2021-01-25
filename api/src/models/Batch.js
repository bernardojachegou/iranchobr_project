module.exports = (sequelize, DataTypes) => {
  const batch = sequelize.define(
    "batch",
    {
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
    },
    { tableName: "animais_lotes" }
  );

  batch.associate = (models) => {
    batch.hasMany(models.register, { foreignKey: "fk_id_lote" });
  };

  return batch;
};
