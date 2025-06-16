const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.post('/text', (req, res) => {
  const { action, input } = req.body;

  if (typeof input !== 'string') {
    return res.status(400).json({ error: 'O campo "input" deve ser uma string.' });
  }

  let output;

  switch (action) {
    case 'lowercase':
      output = input.toLowerCase();
      break;
    case 'uppercase':
      output = input.toUpperCase();
      break;
    default:
      return res.status(400).json({ error: 'Ação inválida. Use "lowercase" ou "uppercase".' });
  }

  res.json({ output });
});


app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});


app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
