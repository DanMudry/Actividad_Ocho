const selectAll = () => {
  return db.query("select * from autores");
};

const selectById = (usuario_id) => {
  return db.query("select * from autores where idautores=?", [usuario_id]);
};

module.exports = {
  selectAll,
  selectById,
};
