const express = require("express");
const cors = require("cors");
const app = express();

// Configracion puerto del servidor
app.set("port", process.env.PORT || 4000);

// Middelwares: Funciones que se ejecutan antes de llegar a las rutas
app.use(cors()); // Permite enviar y recibir datos
app.use(express.json()); // Especifica que se enviaran archivos con formato json

// Rutas
app.use("/api/users", require("./routes/users"));

module.exports = app;
