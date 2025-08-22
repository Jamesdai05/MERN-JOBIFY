// comment the below code since we use the express-async-errors;
// import asyncHandler from '../middleWare/asyncHandler.js';
import Job from '../Models/jobModel.js';



const getAllJobs=async(req,res)=>{
   const jobs= await Job.find({});
//    console.log(jobs)
   return res.json(jobs);
}

const getAJobById=async(req,res)=>{
    const id=req.params.id;
    const job=await Job.findById(id);
    if(job){
        return res.json(job);
    }else{
        res.status(404).josn({message:"Job does not exists!"});
    }
}


const addANewJob=async(req,res)=>{
    const {position,company}=req.body;
    if(!position || !company){
        return res.status(400).json({error:"Please fill in the required fields!"});
    }
    const newJob=new Job({
        position,
        company,
        createdBy:req.user?._id
    });
    const createdJob=await newJob.save();
    return res.status(201).json({
        message:"Job created successfully!",
        job:createdJob})
}


const editAJobById=async(req,res)=>{
   const {id}=req.params;
//    const {position,company,jobStatus,jobType,location}=req.body
    const job=await Job.findById(id);
    console.log("Before upating:",job);
   const updatedJob=await Job.findByIdAndUpdate(id,req.body,{new:true});
   console.log("updated Job:",updatedJob);
    if(updatedJob){
        return res.status(201).json({message:"Job updated successfully!",job:updatedJob});
   }else{
        res.status(404).json({message:"Job does not found!"});
   }
}

// const partiallyEditAJobById=async(req,res)=>{
//     const {id}=req.params;
//     const {position,company,jobStatus,jobType,location}=req.body
//     const job=await Job.findByIdAndUpdate(id);
//     if(!job){
//         return res.status(404).json({message:"Job does not found!"});
//     }else{
//         if(position !==undefined) job.position=position;
//         if(company !==undefined) job.company=company;
//         if(jobStatus !==undefined) job.jobStatus=jobStatus;
//         if(jobType !==undefined) job.jobType=jobType;
//         if(location !==undefined) job.location=location;

//         const updatedJob=await job.save();
//         res.status(201).json({message:"Job updated successfully!",job:updatedJob})
//     }

// }


const deleteAJob=async(req,res)=>{
    const id=req.params.id;
    const job=await Job.findById(id);
    if(!job){
        return res.status(404).json({message:"Job not found"});
    }
    await job.deleteOne({id:job._id})
    res.json({message:"Job deleted sueccessfully!"})
}


export {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    deleteAJob,
}