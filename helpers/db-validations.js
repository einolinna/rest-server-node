const Role = require("../models/role");
const Usuario = require("../models/usuario");

const checkRol = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe en la DB`);
  }
};
const checkMail = async (correo='') =>{

const existeEmail = await Usuario.findOne({ correo });

if (existeEmail) {
  throw new Error(`El email ${correo} ya existe en la DB`);
}
}

const checkId = async (id) =>{

  const existeUsser = await Usuario.findById(id);
  
  if (!existeUsser) {
    throw new Error(`El id ${id} no existe`);
  }
  }
  


module.exports = {checkRol,checkMail,checkId};
