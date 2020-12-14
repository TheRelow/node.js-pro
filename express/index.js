const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'views', 'index.hbs'))
})

app.get('/hbs', (req, res)=>{
  res.render('index')
})

app.listen(PORT, ()=>{
  console.log('Server has been started on port ' + PORT)
})