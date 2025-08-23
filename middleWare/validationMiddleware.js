    const validator=(schema)=>(req,res,next)=>{
        const {error}=schema.validate(req.body,{abortEarly:false,allowUnknown: false});//to reject the unknow keys and collect the errors
        if(error){
            return res.status(400).json({
                message:"Data validation failed",
                details:error.details.map(err=>err.message),
            })
        }
        next();
    }

    const idParamsValidator=(schema)=>(req,res,next)=>{
        const {error}=schema.validate(req.params);
        if(error){
            return res.status(400).json({
                message:error.details[0].message,//invalid params id
            })
        }
        next()
    }

    export {validator,idParamsValidator};

















