import Feedback from "../models/feedback.js";

const form =(req,res)=>{
    const {name,email,message}=req.body;
    
    if(!name) throw "Please Enter name";
    if(!email) throw "Please Enter email";
    if(!message) throw "Please Enter message";

    const data = new Feedback({
        name,email,message
    });

    data.save();
    res.status(201).json(data);
}

export default form;