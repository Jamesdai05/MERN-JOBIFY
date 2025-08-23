import Joi from "joi";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";



const jobValidator=Joi.object({
    position: Joi.string().label("Position").required(),
    company:Joi.string().label("Company").required(),
    jobType: Joi.string().valid(...Object.values(JOB_TYPE)).label("Job Type"),
    jobStatus:Joi.string().label("Job Status").valid(...Object.values(JOB_STATUS)),
    location:Joi.string().default('Singapore').label('Location').required(),
    role:Joi.string().label('Role').valid('user','admin'),
})

export default jobValidator;