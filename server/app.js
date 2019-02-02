/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import env from 'dotenv';

env.config();
const app = express();
const PORT = Number.parseInt(process.env.PORT, 10) || 4040;

app.use(express.static(path.join(__dirname, '../dist/')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}
