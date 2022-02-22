const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello everyone!' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'Yo', message1: 'Hamid', message2: 'Danny', message3: 'Christopher'} )
})

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', message: 'Welcome for you', message1: 'Hey everyone we are developers', messageFooter: 'Nous somme dans le footer'} )
})

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog', message:'This is the blog page', message2: 'Title Article', para: 'blablablablablablablablablablablablablablablablablabla'})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})