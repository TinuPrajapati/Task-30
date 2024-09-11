import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"],
    },
    message:{
        type:String,
        required:[true,"Please enter message"],
    }
});

const Feedback = mongoose.model("Feedback",feedbackSchema);

export default Feedback;