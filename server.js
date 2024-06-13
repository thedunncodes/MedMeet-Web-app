// GAteway to the app; Spins up the server

import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes';

dotenv.config();

const app = express();

app.use(routes);
app.use(express.static('public'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port ', Number(port));
});