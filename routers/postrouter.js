const express= require('express')
const router= express.Router()
const Model = require('../models/postModel')
router.post('/add',(req,res)=>{
    console.log(req.body)
    // to save data in mongodb
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err)
    });
    
})
router.get('/getall',(req,res)=>{
    res.send('post read operation')
})
router.get('/delete',(req,res)=>{
    res.send('post delete operation')
})

module.exports=router;