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

    const userInputValidator=(schema)=>(req,res,next)=>{
        const{error,value}=schema.validate(req.body,{abortEarly:false});

        if(error){
            return res.status(400).json({
                message:"Validation error",
                details:error.details.map(err=>err.message),  //create an array of errors details.
            })
        }
        req.body=value; //sanitize the input
        next();
    }

    export {validator,idParamsValidator,userInputValidator};

















