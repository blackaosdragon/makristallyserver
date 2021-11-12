const express = require('express');

const {port} = require('./configuration/config.js');

const app = express();
app.use(express.json());
app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

// app.get('/', (req,res) => {
//     console.log("Usuario conectado");
//     res.send("Hola mundo")
// })
// app.get('/',express.static(__dirname+'/page'))
app.use('/',express.static(__dirname+'/page'))

