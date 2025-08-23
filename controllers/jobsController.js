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

    const userId=req.user.id;

    const job=await Job.findById(id);
    if(job){
        if (job.createdBy.toString() !== userId) {
            //check authorization to view the job
            return res.status(403).json({ message: "Not authorized to view this job!" });
        }
        return res.json(job);
    }else{
        res.status(404).josn({message:"Job does not exists!"});
    }
}


const addANewJob=async(req,res)=>{
    const {position,company,jobType,location,jobStatus}=req.body;
    // if(!position || !company){
    //     return res.status(400).json({error:"Please fill in the required fields!"});
    // }
    const newJob=new Job({
        position,
        company,
        jobType,
        location,
        jobStatus,
        createdBy:req.user?._id
    });
    const createdJob=await newJob.save();
    return res.status(201).json({
        message:"Job created successfully!",
        job:createdJob})
}


const editAJobById=async(req,res)=>{
   const {id}=req.params;
   const userId= req.user.id;
//    const {position,company,jobStatus,jobType,location}=req.body
   const updatedJob=await Job.findByIdAndUpdate(id,req.body,{new:true});
//    console.log("updated Job:",updatedJob);
    if(updatedJob){
        if (updatedJob.createdBy.toString() !== userId) {
            //check authorization to view the job
            return res.status(403).json({ message: "Not authorized to modify this job!" });
        }
        return res.status(201).json({message:"Job updated successfully!",job:updatedJob});
   }else{
        res.status(404).json({message:"Job does not found!"});
   }
}

const partiallyEditAJobById=async(req,res)=>{
    const {id}=req.params;
    const userId=req.user.id;
    const {position,company,jobStatus,jobType,location}=req.body
    const job=await Job.findByIdAndUpdate(id);
    if(!job){
        return res.status(404).json({message:"Job does not found!"});
    }else{
        if (job.createdBy.toString() !== userId) {
            //check authorization to view the job
            return res.status(403).json({ message: "Not authorized to modify this job!" });
        }
        if(position !==undefined) job.position=position;
        if(company !==undefined) job.company=company;
        if(jobStatus !==undefined) job.jobStatus=jobStatus;
        if(jobType !==undefined) job.jobType=jobType;
        if(location !==undefined) job.location=location;

        const updatedJob=await job.save();
        res.status(201).json({message:"Job updated successfully!",job:updatedJob})
    }

}


const deleteAJob=async(req,res)=>{
    const id=req.params.id;
    const userId=req.user.id;
    const job=await Job.findByIdAndDelete(id);
    if(!job){
        return res.status(404).json({message:"Job not found"});
    }
    if(job.createdBy.toString()!==userId){
        return res.status(403).json({message: "Not authorized to delete this job!" })
    }
    res.json({message:"Job deleted sueccessfully!"})
}


export {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    deleteAJob,
    partiallyEditAJobById,
}