import Job from "../Models/jobModel.js";
import User from "../Models/userModel.js";
import { v2 as cloudinary }  from "cloudinary";
import { promises as fs } from "fs";


const getUserProfile=async(req,res)=>{
    const user=await User.findById(req.user._id).select("-password");

    if(user){
        return res.status(200).json({
            // id:user._id,
            name:user.name,
            email:user.email,
            location:user.location,
            role:user.role,
            avatar:user.avatar,
        })
    }

    res.status(404).json({message:"User does not exists!Please try again."});
}



const getStatistics=async(req,res)=>{
    const jobs=await Job.countDocuments();
    const users=await User.countDocuments();

    res.status(200).json({jobCount:jobs,userCount:users});
}



const updateUserProfile=async(req,res)=>{
    // new user info is the req.body
    const id=req.user._id;

    if(req.file){
        const uploadRes=await cloudinary.uploader.upload(req.file.path);
        req.body.avatar=uploadRes.secure_url;
        req.body.avatarPublicId=uploadRes.public_id;
        // delete the file from server after upload to cloudinary
        await fs.unlink(req.file.path);
    }

    const updatedProfile=await User.findByIdAndUpdate(id,req.body,{new:true}).select("-password -_id");

    // handle the image deletion in cloudinary
    if(req.file && req.user.avatarPublicId){
        await cloudinary.uploader.destroy(req.user.avatarPublicId);
    }

    if(updatedProfile){
        return res.status(201).json({message:"Profile updated successfully!",user:updatedProfile})
    }
    console.error("Update user profile error");
    return res.status(500).json({message:"Failed to update profile!"});
}



export {
    getUserProfile,
    getStatistics,
    updateUserProfile,
}