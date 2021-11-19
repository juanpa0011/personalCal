const express = require('express');
const cors = require('cors');
require('dotenv').config();

const DB = require('../database/connect.js');


class Servidor {
    constructor() {
        this.app = express();
        this.puerto = process.env.EXPRESS_PORT;
        this.rutaApi = '/';

        this.middlewares();
        this.router();
        this.conection()
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.static('public'));
    }
    router() {
        this.app.use(this.rutaApi, require('../routers/api.routes'));
    }
    conection() {
        DB.connect(error => {
            if (error) {
                console.log(error)
            } else {
                console.log('Conectado a DB.')
            }
        })
    }
    listen(){
        this.app.listen(this.puerto, () => {
            console.log(`We are listening the server: Localhost:${this.puerto}` );
            console.log(`Api en: Localhost:${this.puerto}/${this.rutaApi}`);
        });
    }
}

module.exports = Servidor;