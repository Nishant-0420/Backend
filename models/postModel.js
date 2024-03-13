// importing specific part from mongoose
const {model, Schema}= require('../connection');
const mySchema= new Schema({
    title : {type : String , require: true},
    user : String,
    description : String,
    image : String,
    postedTime : Date,
    likes : {type : Number , default:0},
    shares : {type : Number, default: 0},

})
module.exports= model('PostCollection',mySchema)

