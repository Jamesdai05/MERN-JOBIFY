import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
// import asyncHandler from './middleWare/asyncHandler';
import jobs from './Models/jobs.js';
import { nanoid } from 'nanoid';
import {notFound,errorHandler} from "./middleWare/errorMiddleware.js";

const app=express();

dotenv.config()

const port= process.env.PORT || 4000



// console.log(jobs)


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));


app.get("/", (req,res)=>{
    res.send("Hello world")
})



app.get("/api/jobs/all-jobs",(req,res)=>{
    try {
        return res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.json("Error during fetching jobs!")
        next(error)
    }
})

app.get("/api/jobs/:id",(req,res)=>{
    try {
        const id=req.params.id;
        const job=jobs.find(job=>job.id===id)
        return res.json(job)
    } catch (error) {
        console.log(error)
    }
})

app.post("/api/jobs/add-job",(req,res)=>{
    try {
        const {title,company}=req.body;
        if(!title || !company){
            return res.json({message:"please provide the title and company!"});
        }
        const newJob={id:nanoid(),title,company};
        const updatedJobs=[...jobs,newJob];
        res.status(201).json({message:"Job added successfully!",updatedJobs})
    } catch (error) {
        console.log("error occurred during job adding",error);
    }
})

app.put("/api/jobs/edit/:id",(req,res)=>{
    try {
        const id=req.params.id;
        const job=jobs.find(job=>job.id===id);
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
})

app.delete("/api/jobs/deleting/:id",(req,res)=>{
    const id=req.params.id;
    const jobInd=jobs.findIndex(job=>job.id===id);
    if(!jobInd){
        return res.status(404).json({message:"Job not found"});
    }
    jobs.splice(jobInd,1)
    res.json({message:"Job deleted!",jobs})
})

// app.post("/",(req,res)=>{
//     console.log(req.body.title)
//     res.send("Post request submitted.")
// })

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("Server is running on port",port)
})
