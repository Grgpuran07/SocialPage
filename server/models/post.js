const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    bodycontent:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }

})

mongoose.model("Post",postSchema)