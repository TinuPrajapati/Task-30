import Feedback from "../models/feedback.js";

const show =async (req,res)=>{
    const data =await Feedback.find({});

    res.status(200).json(data);
}

export default show;