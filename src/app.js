//gestion de rutas
const express = require("express");

//crear la app
const app = express();
app.use(express.json()); //traigo json para poder utilizar el req.body

//empiezo rutas
app.use("/api", require("./routes/api"));

//middleware error
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
