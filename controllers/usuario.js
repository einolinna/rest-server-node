const { request,response } = require("express");

const usuarioGet = (req = request, res = response) => {
  const {q,apikey,nombre='',page,limit} = req.query;
  res.json({
    msg: "get API",
    q,
    apikey,
    nombre,
    page,
    limit
  });
};

const usuarioPost = (req, res = response) => {

  const {nombre,edad} = req.body;
  res.status(201).json({
    msg: "post API",
    nombre,
    edad

  });
};

const usuarioPut = (req, res = response) => {
  const {id} = req.params;
  res.json({
    msg: "put API",
    id
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
