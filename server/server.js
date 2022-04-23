const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/style.css', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/css')
    .sendFile(path.resolve(__dirname, '../client/style.css'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// module.exports = app;
