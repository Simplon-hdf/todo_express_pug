const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about', (req, res) => {
//   res.send('Hello World! to about')
// })

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})