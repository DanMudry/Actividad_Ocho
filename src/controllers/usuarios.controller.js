const Usuario = require("../models/usuario.model");

const getAllUsuarios = async (req, res) => {
  try {
    const [result] = await Usuario.selectAll();
    //me quedo en result con la posicion cero del select
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsuarioById = async (req, res) => {
  const [result] = await Usuario.selectById(req.params.usuario_id);
  res.json(result);
};

function createUsuario(req, res) {
  console.log(req.body);
  res.send("ESTOY EN POST USUARIO");
}

const updateUsuario = (req, res) => {
  console.log(req.params.usuario_id);
  res.send("ESTOY EN UPDATE USUARIO");
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
