const router = require("express").Router();
const {
  getAllPublicaciones,
  getPublicacionById,
  createPublicacion,
  updatePublicacion,
} = require("../../controllers/publicaciones.controller");
//ruta /api/publicaciones
router.get("/", getAllPublicaciones);
router.get("/:usuario_id", getPublicacionById);
router.post("/", createPublicacion);

module.exports = router;
