import { Router } from "express";
import { listartodas, agregar } from "../controllers/historial.controller.js";

const historial = Router();

historial.get("/historial/listar", listartodas);
historial.post("/historial/agregar", agregar);
//campaña.delete("/campana/delete/:id", deleteCampaña);

export default historial;
