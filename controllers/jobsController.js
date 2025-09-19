// comment the below code since we use the express-async-errors;
// import asyncHandler from '../middleWare/asyncHandler.js';
import Job from '../Models/jobModel.js';



const getAllJobs=async(req,res)=>{
   const userId = req.user.id;
   const jobs = await Job.find({ createdBy: userId });
   return res.json({jobs});
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
        return res.json({job});
    }else{
        res.status(404).json({message:"Job does not exists!"});
    }
}


const addANewJob=async(req,res)=>{
     console.log("Route hitted!Body:",req.body);
     const userId=req.user.id;

     const job= await Job.create({
        ...req.body,
        createdBy:userId,
     })

    res.status(201).json({job});
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


const showStats=async(req,res)=>{
    // console.log(req.user)
    let stats=await Job.aggregate([
        {$match:{createdBy:req.user._id}},
        {$group:{_id:"$jobStatus",count:{$sum:1}}}
    ])

    stats=stats.reduce((a,c)=>{
        const {_id:title,count}=c;
        a[title]=count
        return a
    },{})

    // console.log(stats)
    const defaultData={
        pending: stats.pending || 0,
        interview:stats.interview || 0,
        declined:stats.declined || 0,
        onGoing: stats["on-going"] || 0
    }

    const monthlyData=await Job.aggregate([
        {$match:{createdBy:req.user._id}},
        {$group:
            {
                _id:{
                    year:{$year:'$createdAt'},
                    month:{$dateToString: { format: "%b", date: "$createdAt" }}
                },
                count:{$sum:1},
            },
        }
    ])

    // const monthlyData=[
    //     {
    //         date:"May 25",
    //         count:45,
    //     },
    //     {
    //         date:"Jun 25",
    //         count:40,
    //     },
    //     {
    //         date:"Jul 25",
    //         count:55,
    //     },
    //     {
    //         date:"Aug 25",
    //         count:60,
    //     },
    // ]

    res.status(200).json({defaultData,monthlyData})
}


export {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    deleteAJob,
    partiallyEditAJobById,
    showStats
}