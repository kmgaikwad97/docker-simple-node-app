const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Docker')
})
app.get('/about', function (req, res) {
  res.send('This is about')
})
 
app.listen(3400,()=>{
    console.log(`Connected to the port 3400`);
})  