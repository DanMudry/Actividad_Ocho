const Usuario = require("../models/usuario.model");

const getAllUsuarios = async (req, res, next) => {
  try {
    const [result] = await Usuario.selectAll();
    //me quedo en result con la posicion cero del select
    res.json(result);
  } catch (error) {
    next(err);
  }
};

const getUsuarioById = async (req, res, next) => {
  try {
    const [result] = await Usuario.selectById(req.params.usuario_id);
    if (result.length === 0) {
      return res.status(404).json({ Problema: "Usuario No Encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    next(err);
  }
};

const createUsuario = async (req, res, next) => {
  try {
    const [result] = await Usuario.insertUsuario(req.body);
    const [[usuario]] = await Usuario.selectById(result.insertId);
    res.json(usuario);
  } catch (error) {
    next(err);
  }
};

const updateUsuario = async (req, res, next) => {
  try {
    const { usuario_id } = req.params;
    const [result] = await Usuario.updateById(usuario_id, req.body);
    const [[usuario]] = await Usuario.selectById(usuario_id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ Problema: "Autor no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    next(err);
  }
};

const deleteUsuario = (req, res) => {
  res.send("estoy en DELETE USUARIO");
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
  getUsuarioById,
};
