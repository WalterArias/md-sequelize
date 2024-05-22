import { Persona } from "../models/persona.model.js";

export const listartodas = async (req, res) => {
  let persona = await Persona.findAll();
  res.send({ status: "ok", respuesta: persona });
};

export const agregar = async (req, res) => {
  const { nombre, apellidos, direccion, email, foto } = req.body;
  const nuevaPersona = await Persona.create({
    nombre,
    apellidos,
    direccion,
    email,
    foto,
  });
  res.send({
    status: "ok",
    respuesta: nuevaPersona,
  });
};
