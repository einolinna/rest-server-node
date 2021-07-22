const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';
        
        //Connect db connection
        this.conectarDB();
        
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }

    async conectarDB(){

        await dbConnection();

    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));
        //Cors
        this.app.use(cors());

        this.app.use(express.json());
    }
    routes(){
       
        this.app.use(this.userPath,require('../routes/usuario'));
           
    }
    listen(){
        this.app.listen(this.port,()=>{

            console.log(`Servidor corriendo en el puerto ${this.port}`);
        
        });

    }



}

module.exports = Server;