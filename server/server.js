const express = require('express');
const app = express();
const path = require('path');

// const apiRouter = require ('./routes/api');

const PORT = 3000;
const foodController = require('../getFoodMiddleware');
// Api Call/openfoodfacts-react-native/API/Api.js

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/style.css', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/css')
    .sendFile(path.resolve(__dirname, '../client/style.css'));
});

// app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', foodController);

app.post('/signup', userController.addUser, userController.getUser, (req, res) => {
  res.statusCode(200).render(path.resolve(__dirname, '../client/index'));
})

app.post('/login', userController.getUser, (req, res) => {
  res.statusCode(200).render(path.resolve(__dirname, '../client/index'));
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', foodController.getProduct, (req, res) => {
  return res.status(200).json(res.locals.searchResults)
})
// module.exports = app;
