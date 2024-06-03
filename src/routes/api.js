const router = require("express").Router();

router.use("/usuarios", require("./api/usuarios"));
router.use("/publicaciones", require("./api/publicaciones"));

module.exports = router;
