const express = require('express');
const app = express();
const port=5000;
app.listen(port,()=>{
  console.log(`server is running at ${port}`);
})
// app.use((req,res)=>{
//   res.send(`server running`);
// })
app.get('/', (req, res)=>{
  res.send('hello world this is express by --Divyanshi Varshney');
})
// console.log("Using Express --Divyanshi Varshney");
// app.listen(3000);
