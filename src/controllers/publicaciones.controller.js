const Publicacion = require("../models/publicaciones.model");

const getAllPublicaciones = async (req, res) => {
  res.send("estoy GETALLPUBLICACIONES");
};

const getPublicacionById = async (req, res) => {
  res.send("estoy RECUPERANDO BY ID");
};

const createPublicacion = async (req, res) => {
  res.send("estoy CREANDO EL POST");
};

module.exports = { getAllPublicaciones, getPublicacionById, createPublicacion };
