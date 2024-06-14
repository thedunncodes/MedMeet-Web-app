// GAteway to the app; Spins up the server

import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();

app.use(routes);
app.use(express.static('public'));

const port = process.env.PORT || 3500;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log('Server running on port ', Number(port));
});