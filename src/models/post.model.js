const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        image:{
            type:String
        },
        caption:{
            type:String
        }
    },
    {
        timestamps: true
    }
)

const postModel = mongoose.model("postModel",postSchema)
module.exports = postModel