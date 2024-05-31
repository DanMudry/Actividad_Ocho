const router = require("express").Router();
const {
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../../controllers/usuarios.controller");

router.get("/", getAllUsuarios);
router.post("/", createUsuario);
router.delete("/", deleteUsuario);
router.put("/", updateUsuario);

module.exports = router;
