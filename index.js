import express from "express";
import cors from "cors";
import { sequelize } from "./src/models/database.js";
import personaruta from "./src/routes/persona.routes.js";
import historialruta from "./src/routes/historial.routes.js";

const app = express();
app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3100;
app.use(personaruta);
app.use(historialruta);

app.listen(port, () => {
  console.log(`Servidor encendido en puerto: ${port}`);
});

//sincronizacion de schemes y orm
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("sincronizacion ok!");
  })
  .catch((error) => {
    console.log(`error en la sincronizacion`);
  });
