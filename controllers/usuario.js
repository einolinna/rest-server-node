const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");


const usuarioGet = async (req = request, res = response) => {
  
  const {limite=5, desde=0} = req.query;
  const query = {estado:true}
  const [total,usuarios] = await Promise.all([
  Usuario.countDocuments(query),
  Usuario.find(query)
      .limit(Number(limite))
      .skip(Number(desde))]); 
  res.json({
    total,
    usuarios
  });
};

const usuarioPost = async (req, res = response) => {

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Validar Correo

 

  //Encriptar pw

  const salt = bcryptjs.genSaltSync(); //Por defecto es 10
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en DB
  await usuario.save();
  res.json({
    usuario,
  });
};

const usuarioPut = async (req, res = response) => {
  const { id } = req.params;
  const {_id,password,correo,google,...resto} = req.body;

  if(password){

  const salt = bcryptjs.genSaltSync(); //Por defecto es 10
  resto.password = bcryptjs.hashSync(password, salt);

  }

  const usuario = await Usuario.findByIdAndUpdate(id,resto);


  res.json({
    msg: "put API",
    id,
    usuario
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

const usuarioDelete = async(req, res = response) => {

  const { id } = req.params;

  //const borrar = await Usuario.findByIdAndDelete(id);
  const usuario = await Usuario.findByIdAndUpdate(id,{estado: false});


  res.json({
    usuario,
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
