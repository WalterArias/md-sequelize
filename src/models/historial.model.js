import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "./database.js";

export const Historial = sequelize.define("historial", {
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hechos: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
  prision: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Historial.associate = (models) => {
  Historial.belongsTo(models.Persona, {
    foreignKey: {
      allowNull: false,
    },
  });
  return Historial;
};
