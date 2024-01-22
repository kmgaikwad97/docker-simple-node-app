const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Docker')
})
app.get('/about', function (req, res) {
  res.send('This is about')
})
app.get('/devops', function (req, res) {
  res.send('This is devops') 
})
 
app.listen(8080,()=>{
    console.log(`Connected to the port 8080`);
})  
// app.listen(3400,()=>{
//     console.log(`Connected to the port 3400`);
// })  