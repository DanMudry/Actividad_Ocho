const router = require("express").Router();
const {
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../../controllers/usuarios.controller");
//ruta /api/usuarios
router.get("/", getAllUsuarios);
router.post("/", createUsuario);
router.delete("/:usuario_id", deleteUsuario);
router.put("/:usuario_id", updateUsuario);

module.exports = router;
