import mongoose from "mongoose";
import { JOB_STATUS,JOB_TYPE } from "../utils/constants.js";

const Schema=mongoose.Schema

const jobSchema=new Schema(
    {
        position:{
            type:String,
            require:true,
        },
        company:{
            type:String,
            require:true,
        },
        status:{
            type:String,
            require:true,
            default:JOB_STATUS.PENDING,
        },
        jobType:{
            type:String,
            enum:Object.values(JOB_TYPE),
            default: JOB_TYPE.FULL_TIME,
        },
        jobStatus:{
            type:String,
            enum:Object.values(JOB_STATUS),
            default: JOB_STATUS.PENDING,
        },
        location:{
            type:String,
            default:"Singapore",
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        createdBy:{
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    },
{
    timestamps:true,
})

const Job=mongoose.model("Job",jobSchema);
export default Job;