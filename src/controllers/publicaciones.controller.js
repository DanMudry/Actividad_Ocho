const Publicacion = require("../models/publicaciones.model");

const getAllPublicaciones = (req, res) => {
  res.send("estoy GETALLPUBLICACIONES");
};

const getPublicacionById = async (req, res) => {
  res.send("estoy RECUPERANDO BY ID");
};

const createPublicacion = (req, res) => {
  res.send("estoy CREANDO EL POST");
  Publicacion.insertPublicacion();
};

module.exports = { getAllPublicaciones, getPublicacionById, createPublicacion };
