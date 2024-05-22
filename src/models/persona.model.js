import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";

export const Persona = sequelize.define("persona", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Persona.associate = (models) => {
  Persona.hasMany(models.historial, {});
  return Persona;
};
