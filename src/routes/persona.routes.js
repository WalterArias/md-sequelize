import { Router } from "express";
import { listartodas, agregar } from "../controllers/persona.controller.js";

const persona = Router();

persona.get("/persona/listar", listartodas);
persona.post("/persona/agregar", agregar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default persona;
