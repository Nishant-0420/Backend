// importing specific part from mongoose
const {model, Schema}= require('../connection');
const mySchema= new Schema({
    title : {type : String , require: true},
    user : String,
    postedTime : date,
    description : String,
    image : String,
    likes : {type : number , default:0},
    shares : {type : number, default: 0},

})
module.exports= model('PostCollection',mySchema)
