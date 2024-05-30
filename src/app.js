//gestion de rutas
const express = require("express");

//crear la app
const app = express();

//empiezo rutas
app.use("/api", require("./routes/api"));

module.exports = app;
