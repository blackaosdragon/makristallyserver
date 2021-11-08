const express = require('express');

const {port} = require('./configuration/config.js');

const app = express();

app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

app.get('/', (req,res) => {
    console.log("Usuario conectado");
    res.send("Hola mundo")
})