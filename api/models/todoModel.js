
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
    userId:{
        type:String,
    },
    name:{
        type: String,
        required:"enter task name"
    },
    status:{
        type:[{
            type:String,
            enum:['pending', 'ongoing', 'completed']
        }],
        default:['pending']
    },
    created:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);