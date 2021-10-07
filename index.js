const express = require('express');
const port = 3000; 
const app = express();  
app.get('/', (req, res) => res.json({key: "HOLA TRACY"})) 
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`) )