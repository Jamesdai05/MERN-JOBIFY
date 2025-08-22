import { nanoid } from 'nanoid';
import jobs from '../Models/jobs.js';
import asyncHandler from '../middleWare/asyncHandler.js';




const getAllJobs=(req,res)=>{
   try {
        return res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.json("Error during fetching jobs!")
        next(error)
    }
}

const getAJobById=(req,res)=>{
    try {
        const id=req.params.id;
        const job=jobs.find(job=>job.id===id)
        return res.json(job)
    } catch (error) {
        console.log(error)
    }
}


const addANewJob=(req,res)=>{
    try {
        const {title,company}=req.body;
        if(!title || !company){
            return res.json({message:"please provide the title and company!"});
        }
        const newJob={id:nanoid(),title,company};
        // const newJob=newJob;
        res.status(201).json({message:"Job added successfully!",newJob})
    } catch (error) {
        console.log("error occurred during job adding",error);
    }
}


const editAJobById=(req,res)=>{
    try {
        const id=req.params.id;
        const job=jobs.find(job=>job.id===id);
        console.log(job);
        if(!job){
            return res.json("Job does not exists!Please try again!")
        }
        const {title,company}=req.body;
        const updatedJob={...job,title,company}
        return res.status(201).json({message:"Job updated successfully!",updatedJob})
    } catch (error) {
        console.log(error)
        if (error.message.includes('Invalid job ID') || error.message.includes('Product not found')) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({message:"Error in updating jobs!"})
    }
}

const partiallyEditAJobById=(req,res)=>{
    try{
        const {id}=req.params;
        const job=jobs.find(job=>job.id===id);
        const {title,company}=req.body;
        if(company){
            const updatedJob={...job,company};
            return res.status(201).json({updatedJob});
        }
        if(title){
            const updatedJob={...job,title};
            return res.status(201).json({updatedJob});
        }
        return res.json({message:"please at least update one field!"})
    }catch(err){
        return res.json({err})
    }
}


const deleteAJob=(req,res)=>{
    const id=req.params.id;
    const jobInd=jobs.findIndex(job=>job.id===id);
    if(!jobInd){
        return res.status(404).json({message:"Job not found"});
    }
    const deletedJob=jobs.splice(jobInd,1)
    res.json({message:"Job deleted!",deletedJob})
}


export {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    partiallyEditAJobById,
    deleteAJob,
}