const { Router } = require("express");
const { check } = require("express-validator");
const { usuarioGet, usuarioPost, usuarioPut, usuarioPatch, usuarioDelete } = require("../controllers/usuario");

const router = Router();

router.get("/", usuarioGet);

router.post("/",[
    
    
    check('correo',"No es un formato valido").isEmail()


], usuarioPost);

router.put("/:id", usuarioPut);

router.patch("/",usuarioPatch);

router.delete("/", usuarioDelete);

module.exports = router;
