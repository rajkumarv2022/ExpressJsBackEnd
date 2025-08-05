const mongoose=require('mongoose');

const schema = new mongoose.Schema( {

    name : {
        type:String,
        required:true,
    },

    completed : {
        type:Boolean,
        default:false
    }

} );

module.exports = mongoose.model("task",schema);