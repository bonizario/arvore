const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/livros/1', (req, res) => {
  return res.render('book.njk');
});

server.get('/', (req, res) => {
  return res.render('home.njk');
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
