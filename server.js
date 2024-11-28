import express from 'express';
import "dotenv/config.js";
import './config/database.js';

const server = express();
const PORT = process.env.PORT || 8080;

server.get('/', (req, res) => {
  res.send('Backend Minga Group 7!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});