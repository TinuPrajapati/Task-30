const handler =(err,req,res,next)=>{
    if(err){
        if(err.message){
           return res.status(500).json({message:err.message});
        }else{
            return res.status(500).json({message:err})
        }
    }else{
        next();
    }
}

export default handler;