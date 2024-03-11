const express= require('express')
const router= express.Router()
router.post('/add',(req,res)=>{
    console.log()
    res.send('post add operation')
})
router.get('/getall',(req,res)=>{
    res.send('post read operation')
})
router.get('/delete',(req,res)=>{
    res.send('post delete operation')
})

module.exports=router;