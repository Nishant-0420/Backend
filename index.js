//  importing
 const express = require('express'); 
//  intializing
const app = express()
const postRouter=require('./routers/postrouter');
// middleware
app.use('/post',postRouter)
const port=5000

app.get('/',(req,res)=>{ res.send('hello response on the way ') })
app.get('/add',(req,res)=>{ res.send('add is working !! ') })
// starting server
app.listen(port, ()=>console.log("server running!!!"));