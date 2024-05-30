const router = require("express").Router();
const { getAllUsuarios } = require("../../controllers/usuarios.controller");

router.get("/", getAllUsuarios);

module.exports = router;
