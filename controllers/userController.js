import User from "../Models/userModel.js";


const registration=async(req,res)=>{
    const {name,email,password,location}=req.body;

    const existedEmail=await User.findOne({email});

    if(existedEmail){
        return res.status(400).json({message:"Email already exists"});
    }

    const user=await User.create({
        name,
        email,
        password,
        location,
    })

    if(user){
        res.status(201).json({user});
    }
}



const login=async(req,res)=>{
    res.json("log in")
}



export {
    registration,
    login,
}