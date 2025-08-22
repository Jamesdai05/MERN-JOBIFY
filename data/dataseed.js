import User from "../Models/userModel.js";
import Job from "../Models/jobModel.js";
import jobs from "./jobs.js";
import users from "./user.js";
import connectDB from "../utils/DBconnect.js";

connectDB()


const dataImport=async()=>{
    try{
        // RESET DATABASE;
        // await User.deleteMany();
        // await Job.deleteMany();

        const createdUsers=await User.insertMany(users);
        const adminUser=createdUsers[0]._id;

        const createdJobs=jobs.map(job=>{
            return {...job,createdBy:adminUser};
        })

        await Job.insertMany(createdJobs)

        console.log("data seeding is done!");
        process.exit()
    }catch(err){
        console.error("Error in data seeding",err);
        process.exit(1);
    }
}

dataImport();