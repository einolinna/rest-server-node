const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { validationResult } = require("express-validator");

const usuarioGet = (req = request, res = response) => {
  const { q, apikey, nombre = "", page, limit } = req.query;
  res.json({
    msg: "get API",
    q,
    apikey,
    nombre,
    page,
    limit,
  });
};

const usuarioPost = async (req, res = response) => {
  const errors = validationResult(req);

  //Si hay errores
  if (!errors.isEmpty()) {
    res.status(400).json({ errors });
  }
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Validar Correo

  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    return res.status(400).json({
      msg: "Ese correo ya esta en uso",
    });
  }

  //Encriptar pw

  const salt = bcryptjs.genSaltSync(); //Por defecto es 10
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en DB
  await usuario.save();
  res.json({
    usuario,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API",
    id,
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
