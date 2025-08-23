    const validator=(schema)=>(req,res,next)=>{
        const {error}=schema.validate(req.body,{abortEarly:false});
        if(error){
            return res.status(400).json({
                message:"Data validation failed",
                details:error.details.map(err=>err.message),
            })
        }
        next();
    }

    export default validator;

















