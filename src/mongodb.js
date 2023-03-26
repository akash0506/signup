const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('mongodb connected');
})

.catch(()=>{
    console.log('failed to connect');
})

const loginschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


const collection=new mongoose.models('collections',loginschema);

module.exports = collection