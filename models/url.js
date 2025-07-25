import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    requiredURL:{
        type:String,
        required:true,

    },
    visitHistory:[{
        timestamp: {
            type: Date,
            default: Date.now()
        }
    }],
  

},{timestamps:true}
)

const URL =mongoose.model('url',urlSchema)
export default URL;