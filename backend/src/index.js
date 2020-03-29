const express = require('express');
//Referenciando o arquivo routes no memso pacote
const routes = require('./routes');
const cors = require('cors');

const app = express()

//usar medidas de segurança, só front declarado
app.use(cors());
//dizer para aplicação que aceitamos json
app.use(express.json());
app.use(routes);

/* 

**Rota / Recurso

*/
//Estabelecer os recursos

//começar a ouvir a requisições a execução do arquivo

app.listen(3333);