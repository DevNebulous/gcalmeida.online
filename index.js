const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9090;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/gcalmeida', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res) => {
  res.status(404).send('<html><body><h1>404 Not Found</h1></body></html>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
