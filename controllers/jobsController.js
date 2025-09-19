// comment the below code since we use the express-async-errors;
// import asyncHandler from '../middleWare/asyncHandler.js';
import Job from '../Models/jobModel.js';
import day from 'dayjs';



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

    let monthlyData=await Job.aggregate([
        {$match:{createdBy:req.user._id}},
        {$group:
            {
                _id:{
                    year:{$year:'$createdAt'},
                    monthNumber: { $month: "$createdAt" }, // for sorting
                    monthName:{$dateToString: { format: "%b", date: "$createdAt" }} //to convert the number to "Mmm" format
                },
                count:{$sum:1},
            },
        },
        {$sort:{"_id.year":-1,"_id.monthNumber":-1}}, //sort the month according to the real number
        {$limit:6},
    ])

    monthlyData = monthlyData.map(data=>{
        const {_id:{year,monthName},count}=data

        // to format the month and year
        const date=day(`${monthName} ${year}`, "MMM YYYY").format("MMM YY")
        return {date,count}
    }).reverse()

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