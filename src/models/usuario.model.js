const selectAll = () => {
  return db.query("select * from autores");
};

const selectById = (usuario_id) => {
  return db.query("select * from autores where idautores=?", [usuario_id]);
};

const insertUsuario = ({ nombre_autor, imagen_autor, email_autor }) => {
  return db.query(
    "insert into autores  (nombre_autor,imagen_autor,email_autor) values (?,?,?)",
    [nombre_autor, imagen_autor, email_autor]
  );
};

const updateById = (
  usuario_id,
  { nombre_autor, imagen_autor, email_autor }
) => {
  return db.query(
    `update autores
   set nombre_autor=?, imagen_autor=?, email_autor=?
   where idautores=?`,
    [nombre_autor, imagen_autor, email_autor, usuario_id]
  );
};

module.exports = {
  selectAll,
  selectById,
  insertUsuario,
  updateById,
};
