import { Historial } from "../models/historial.model.js";

export const listartodas = async (req, res) => {
  let historial = await Historial.findAll();
  res.send({ status: "ok", respuesta: historial });
};

export const agregar = async (req, res) => {
  const { fecha, hechos, prision, personaId } = req.body;
  const nuevoHistorial = await Historial.create({
    fecha,
    hechos,
    prision,
    personaId,
  });
  res.send({
    status: "ok",
    respuesta: nuevoHistorial,
  });
};
