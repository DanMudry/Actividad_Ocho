const Publicacion = require("../models/publicaciones.model");

const getAllPublicaciones = async (req, res, next) => {
  try {
    const [result] = await Publicacion.getPublicaciones();
    //me quedo en result con la posicion cero del select
    res.json(result);
  } catch (error) {
    next(err);
  }
};

const getPublicacionById = async (req, res, next) => {
  try {
    const [result] = await Publicacion.getPublicacionByIdUsuario(
      req.params.usuario_id
    );
    if (result.length === 0) {
      return res.status(404).json({ fatal: "Usuario No Encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    next(err);
  }
};

const createPublicacion = async (req, res) => {
  res.send("CREANDO");
  Publicacion.insertPublicaciones();
};

module.exports = { getAllPublicaciones, getPublicacionById, createPublicacion };
