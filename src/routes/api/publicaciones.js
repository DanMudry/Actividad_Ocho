const router = require("express").Router();
const {
  getAllPublicaciones,
  getPublicacionById,
  createPublicacion,
} = require("../../controllers/publicaciones.controller");
//ruta /api/publicaciones
router.get("/", getAllPublicaciones);
router.get("/:usuario_id", getPublicacionById);
router.post("/", createPublicacion);

/*router.post("/", createUsuario);
router.delete("/:usuario_id", deleteUsuario);
router.put("/:usuario_id", updateUsuario);*/

module.exports = router;
