const express = require('express');
// const color = require('color');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.status(200).send('api is running');
});

app.get('/', (req, res) => {
  res.status(200).send('works');
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
