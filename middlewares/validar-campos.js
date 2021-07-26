const { validationResult } = require("express-validator");

const validarCampos = (req,res,next) =>{


    const errors = validationResult(req);

    //Si hay errores
    if (!errors.isEmpty()) {
      res.status(400).json({ errors });
    }

    



    next();
}

module.exports = {validarCampos};