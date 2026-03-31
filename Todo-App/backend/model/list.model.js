const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    desc:{
        type:String,
        require:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userSchema'
    }
})

const user = mongoose.model('listSchema',listSchema)
module.exports = user