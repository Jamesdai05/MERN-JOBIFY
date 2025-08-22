import express from "express";
import "express-async-errors"; //the same function to use middleware of asynchandleer
import morgan from "morgan";
import dotenv from "dotenv";
import jobRouter from "./routes/jobRoutes.js";
import {notFound,errorHandler} from "./middleWare/errorMiddleware.js";
import connectDB from "./utils/DBconnect.js";

const app=express();

dotenv.config()

const port= process.env.PORT || 4000

connectDB();



// console.log(jobs)


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));


app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.use("/api/jobs",jobRouter)

// app.post("/",(req,res)=>{
//     console.log(req.body.title)
//     res.send("Post request submitted.")
// })

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("Server is running on port",port)
})
