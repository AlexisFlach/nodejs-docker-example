const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hello World")
})

app.listen(config.port, () => {
  console.log(`Server is listening on port: ${config.port}`);
})
