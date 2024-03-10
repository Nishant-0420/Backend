// mongoose is framework that helps to easily use mongodb
const mongoose = require('mongoose');
// remove<password> and add your password i.e. nisahnt69 ...... give name to db between /?
const url='mongodb+srv://nishant:nishant69@cluster0.apvlvmv.mongodb.net/myfirstdatabase?retryWrites=true&w=majority&appName=Cluster0'
// mongoose is a asynchronous fun and give promise
mongoose.connect(url)  //thenc prompt is used to have then and catch block
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports=mongoose;
