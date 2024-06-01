const getPublicaciones = () => {
  return db.query("select * from publicaciones");
};

const getPublicacionByIdUsuario = (usuario_id) => {
  return db.query("select * from publicaciones where autores_idautores=?", [
    usuario_id,
  ]);
};

const insertPublicaciones = () => {
  console.log("estoy en model renegando");
};

module.exports = {
  insertPublicaciones,
  getPublicacionByIdUsuario,
  getPublicaciones,
};
