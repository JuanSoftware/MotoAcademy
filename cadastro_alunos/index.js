// app.js
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors())

const routes = require('./routes')

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`)
})