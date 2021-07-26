const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Nombre obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "Correo obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado:{
      type: Boolean,
      default: true
  },
  google:{
      type: Boolean,
      default:false
  }
});

usuarioSchema.methods.toJSON = function(){

  const {password,__v,...usuario} = this.toObject();

  return usuario;

}

module.exports = model('Usuario',usuarioSchema);
