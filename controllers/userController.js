import User from "../Models/userModel.js";
import generationToken from "../utils/tokenGeneration.js";


const registration=async(req,res)=>{
    const {name,email,password,location}=req.body;

    const isUserRegistered=await User.findOne({email});

    if(isUserRegistered){
        return res.status(400).json({message:"Email already exists"});
    }
    const user=await User.create({
        name,
        email,
        password,
        location,
    })
    if(user){
        generationToken(res,user._id)
        res.status(201).json({user});
    }
}



const login=async(req,res)=>{
    const {email,password}=req.body;

    const user= await User.findOne({email});
    if(user && await user.matchPassword(password)){
        generationToken(res,user._id)
        return res.status(200).json({
            name:user.name,
            email:user.email,
            role:user.role,
        })
    }
    res.status(401).json({message:"Invalid credentials!Please try again."})
}



export {
    registration,
    login,
}