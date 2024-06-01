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
  autores_idautores,
  categorias_idcategorias1,
}) => {
  return db.query(
    `insert into publicaciones  (titulo,descripcion,fecha,autores_idautores,categorias_idcategorias1)
    values (?,?,?,?,?)`,
    [titulo, descripcion, fecha, autores_idautores, categorias_idcategorias1]
  );
};

const getPublicacionByIdPubl = (id) => {
  return db.query("select * from publicaciones where idpublicaciones=?", [id]);
};

const updateByIdPublicacion = (
  publ_id,
  { titulo, descripcion, fecha, categorias_idcategorias1 }
) => {
  return db.query(
    `update publicaciones
   set titulo=?, descripcion=?, fecha=?,categorias_idcategorias1=?
   where idpublicaciones=?`,
    [titulo, descripcion, fecha, categorias_idcategorias1, publ_id]
  );
};

module.exports = {
  insertPublicaciones,
  getPublicacionByIdUsuario,
  getPublicaciones,
  getPublicacionByIdPubl,
  updateByIdPublicacion,
};
