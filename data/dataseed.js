import User from "../Models/userModel.js";
import Job from "../Models/jobModel.js";
// import testjobs from "./mock_data.json";
import {readFile} from "fs/promises"
import jobs from "./jobs.js";
import users from "./user.js";
import connectDB from "../utils/DBconnect.js";

connectDB()
const rawdata=await readFile("data/mock.json","utf-8")
const testjobs=JSON.parse(rawdata)
// console.log(testjobs)

const dataImport=async()=>{
    try{
        // RESET DATABASE;
        await User.deleteMany();
        await Job.deleteMany();

        const createdUsers=await User.insertMany(users);
        const adminUser=createdUsers[0]._id;
        const testUser=await User.findOne({email:"alice.demo@test.com"})

        const createdJobs=jobs.map(job=>{
            return {...job,createdBy:adminUser};
        })

        // const mockedJobs=jobs.map(job=>{
        //     return{...job,createdBy:testUser}
        // })

        await Job.insertMany(createdJobs);
        // await Job.insertMany(mockedJobs);
        console.log("data seeding is done!");
        process.exit()
    }catch(err){
        console.error("Error in data seeding",err);
        process.exit(1);
    }
}


const testUserDataImport=async()=>{
    try {
        await Job.deleteMany();

        const testUser=await User.findOne({email:"alice.demo@test.com"})
        const mockedJobs=testjobs.map(job=>{
            return {...job,createdBy:testUser}
        })

        await Job.insertMany(mockedJobs)

        console.log("Mock data seeding is successfull!")
        process.exit()
    } catch (err) {
        console.log("Error in mockdata seeding",err)
        process.exit(1)
    }
}

if(process.argv[2]=="-t"){
    console.log(process.argv[2])
    testUserDataImport()
}else{
    dataImport();
}

