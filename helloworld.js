// console.log("Hello World") 
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/menu', function (req, res) {
  res.send('Dumplings')
})

app.listen(3000)

