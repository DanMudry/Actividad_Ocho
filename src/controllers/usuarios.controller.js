const getAllUsuarios = (req, res) => {
  res.send("llegamos a controller GET ALL USUARIO");
};

const createUsuario = (req, res) => {
  res.send("ESTOY EN POST USUARIO");
};

const updateUsuario = (req, res) => {
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
};
