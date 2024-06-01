const Publicacion = require("../models/publicaciones.model");

const getAllPublicaciones = async (req, res, next) => {
  try {
    const [result] = await Publicacion.getPublicaciones();
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
      return res.status(404).json({ Problema: "Usuario No Encontrado" });
    }
    res.json(result);
  } catch (error) {
    next(err);
  }
};

const createPublicacion = async (req, res, next) => {
  try {
    const [result] = await Publicacion.insertPublicaciones(req.body);
    const [[publi]] = await Publicacion.getPublicacionByIdPubl(result.insertId);
    res.json(publi);
  } catch (error) {
    next(err);
  }
};

const updatePublicacion = async (req, res, next) => {
  try {
    const { publ_id } = req.params;
    const [result] = await Publicacion.updateByIdPublicacion(publ_id, req.body);
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ Problema: "Publicacion no encontrada" });
    }
    const [[publi]] = await Publicacion.getPublicacionByIdPubl(publ_id);

    res.json(publi);
  } catch (error) {
    next(err);
  }
};

module.exports = {
  getAllPublicaciones,
  getPublicacionById,
  createPublicacion,
  updatePublicacion,
};
