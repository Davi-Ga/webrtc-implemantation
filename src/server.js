const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Configuração do PeerServer
const peerServer = ExpressPeerServer(server, {
    debug: true
});

app.use('/peerjs', peerServer);

// Servindo os arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

module.exports = server;