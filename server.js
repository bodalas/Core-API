/*
* Primary Application
*
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/hello',(req,res) =>{
  res.send('world! ');
});

app.listen(port);
console.log('Application listening on port '+port);
