import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import jobRouter from "./routes/jobRoutes.js";
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
