const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9090;

// Define o prefixo '/portfolio' para arquivos estáticos
app.use('/portfolio', express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para lidar com 404 (não encontrado)
app.use((req, res) => {
  res.status(404).send('<html><body><h1>404 Not Found</h1></body></html>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});