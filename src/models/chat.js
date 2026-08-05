import mongoose from "mongoose";


const chatSchema = new mongoose.Schema(
{
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    title:{
        type:String,
        default:"New Conversation"
    }

},
{
    timestamps:true
});


export default mongoose.model("Chat", chatSchema);