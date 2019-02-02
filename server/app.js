/* eslint-disable no-console */
const express = require('express');
const path = require('path');

require('dotenv').config();

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
