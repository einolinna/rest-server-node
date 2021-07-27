const { Router } = require("express");
const { check } = require("express-validator");
const { usuarioGet, usuarioPost, usuarioPut, usuarioPatch, usuarioDelete } = require("../controllers/usuario");
const { checkRol, checkMail,checkId } = require("../helpers/db-validations");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.get("/", usuarioGet);

router.post("/",[
    
    
    check('nombre',"Por favor ingrese un nombre").not().isEmpty(),
    check('password',"La contraseña debe contener minimo 6 caracteres").isLength({min:6}),
    check('correo',"Correo no válido").isEmail(),
    check('correo').custom(checkMail),
    //check('rol',"No es un rol válido").isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(checkRol),
    validarCampos



], usuarioPost);

router.put("/:id",[
    check('id','No es un id válido').isMongoId(),
    check('id').custom(checkId),
    check('rol').custom(checkRol),
    validarCampos


], usuarioPut);

router.patch("/",usuarioPatch);

router.delete("/:id",[
check('id','No es un id válido').isMongoId(),
check('id').custom(checkId),
validarCampos

], usuarioDelete);

module.exports = router;
