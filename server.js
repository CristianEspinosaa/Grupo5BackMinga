import express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.get('/', (req, res) => {
  res.send('Backend Minga Group 7!');
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});