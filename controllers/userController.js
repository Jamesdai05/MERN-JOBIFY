import Job from "../Models/jobModel.js";
import User from "../Models/userModel.js";


const getUserProfile=async(req,res)=>{
    const user=await User.findById(req.user._id);

    if(user){
        res.status(200).json({
            // id:user._id,
            name:user.name,
            email:user.email,
            location:user.location,
            role:user.role,
        })
    }

    res.status(404).json("User does not exists!Please try again.");
}



const getStatistics=async(req,res)=>{
    const jobs=await Job.countDocuments();
    const users=await User.countDocuments();

    res.status(200).json({jobCount:jobs,userCount:users});
}



const updateUserProfile=async(req,res)=>{
    const id=req.user._id;
    const updatedProfile=await User.findByIdAndUpdate(id,req.body,{new:true}).select("-password -_id");
    if(updatedProfile){
        return res.status(201).json({message:"Profile updated successfully!",user:updatedProfile})
    }
    res.status(404).json({message:"Job does not found!"});
}



export {
    getUserProfile,
    getStatistics,
    updateUserProfile,
}