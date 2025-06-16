const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else if (req.url === '/html') {

    const htmlPath = path.join(__dirname, 'index.html');
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro ao carregar HTML.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/BackEnd.css') {
    
    const cssPath = path.join(__dirname, 'BackEnd.css');
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro ao carregar CSS.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else {
    // Rota não encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada.');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
