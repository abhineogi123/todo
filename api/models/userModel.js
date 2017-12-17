const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id:{
        type:String,
        required:"enter user Id"
    },
    fullName:{
        type:String,
        required:"enter full name"
    },
    email:{
        type: String,
        required:"enter email",
        unique:true
    },
    password:{
        type:String,
        required:"enter password"
    }
});

module.exports= mongoose.model('Users', UserSchema);
