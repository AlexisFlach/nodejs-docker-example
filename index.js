const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send("Hello World")
})

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})