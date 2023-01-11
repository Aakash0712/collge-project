const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    mobile_number:{
        type:Number,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true,
        Validator:[this.password!==this.cpassword,'Password dosenot matched !']
    },
})

module.exports = mongoose.model('Registeruser', userSchema);