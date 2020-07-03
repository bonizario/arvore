const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.render('book1.njk');
});

module.exports = routes;
