import mongoose from "mongoose";


const messageSchema = new mongoose.Schema(
{

    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required:true
    },


    sender:{
        type:String,
        enum:[
            "user",
            "assistant"
        ],
        required:true
    },


    content:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});


export default mongoose.model("Message", messageSchema);