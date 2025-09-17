import Joi from "joi";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";



const jobValidator=Joi.object({
    position: Joi.string().label("Position").required(),
    company:Joi.string().label("Company").required(),
    jobType: Joi.string().valid(...Object.values(JOB_TYPE)).label("Job Type").required(),
    jobStatus:Joi.string().label("Job Status").valid(...Object.values(JOB_STATUS)).required(),
    location:Joi.string().default('Singapore').label('Location').required(),
})

const updateJobValidator=Joi.object({
    position: Joi.string().label("Position").required().optional(),
    company:Joi.string().label("Company").required().optional(),
    jobType: Joi.string().valid(...Object.values(JOB_TYPE)).label("Job Type").optional(),
    jobStatus:Joi.string().label("Job Status").valid(...Object.values(JOB_STATUS)).optional(),
    location:Joi.string().default('Singapore').label('Location').required().optional(),
    // role:Joi.string().label('Role').valid('user','admin').optional(),
}).min(1);//at least update one field


const idValidator=Joi.object({
    id:Joi.string().hex().length(24).required(), //length should be 24 required
})

export {jobValidator,updateJobValidator,idValidator};