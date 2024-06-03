const getPublicaciones = () => {
  return db.query("select * from publicaciones");
};

const getPublicacionByIdUsuario = (usuario_id) => {
  return db.query("select * from publicaciones where autores_idautores=?", [
    usuario_id,
  ]);
};

const insertPublicaciones = ({
  titulo,
  descripcion,
  fecha,
  categoria,
  autores_idautores,
}) => {
  return db.query(
    `insert into publicaciones  (titulo,descripcion,fecha,categoria,autores_idautores)
    values (?,?,?,?,?)`,
    [titulo, descripcion, fecha, categoria, autores_idautores]
  );
};

const getPublicacionByIdPubl = (id) => {
  return db.query("select * from publicaciones where idpublicaciones=?", [id]);
};

const updateByIdPublicacion = (
  publ_id,
  { titulo, descripcion, fecha, categoria }
) => {
  return db.query(
    `update publicaciones
   set titulo=?, descripcion=?, fecha=?,categoria=?
   where idpublicaciones=?`,
    [titulo, descripcion, fecha, categoria, publ_id]
  );
};

module.exports = {
  insertPublicaciones,
  getPublicacionByIdUsuario,
  getPublicaciones,
  getPublicacionByIdPubl,
  updateByIdPublicacion,
};
