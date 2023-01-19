const express = require('express');
const app = express();
console.log("Using Express --Divyanshi Varshney");
app.get('/', function (req, res) {
    res.send('hello world this is express by --Divyanshi Varshney');
  })
app.listen(3000);