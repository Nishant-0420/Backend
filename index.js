//  importing
 const express = require('express'); 
const cors = require('cors');
//  intializing
const app = express()
const postRouter=require('./routers/postrouter');
// middleware  accept all request
app.use(cors({
    origin: 'http://localhost:3000'
}))
// convert json to js
app.use(express.json())
app.use('/post',postRouter)
const port=5000

app.get('/',(req,res)=>{ res.send('hello response on the way ') })
app.get('/add',(req,res)=>{ res.send('add is working !! ') })
// starting server
app.listen(port, ()=>console.log("server running!!!"));