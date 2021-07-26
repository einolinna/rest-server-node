const {Schema,model} = require('mongoose');

const RolSchema = Schema({

    rol: {

        type: String,
        required: [true,'Rol obligatorio']

    }

});

module.exports = model('Role',RolSchema);