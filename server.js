import express from "express";
import "express-async-errors"; //the same function to use middleware of asynchandleer
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import jobRouter from "./routes/jobRoutes.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import {notFound,errorHandler} from "./middleWare/errorMiddleware.js";
import connectDB from "./utils/DBconnect.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary';
// public
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const app=express();

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
  secure: true
});

const port= process.env.PORT || 4000

connectDB();



// console.log(jobs)

app.use(cors({
  origin: process.env.NODE_ENV === "production" ? "https://jobify-2-1nuu.onrender.com" : "http://localhost:5173",
  credentials: true,
}));



    const __dirname=dirname(fileURLToPath(import.meta.url))



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));

app.use(express.static(path.resolve(__dirname,"./public")))
app.use(cookieParser())


app.get("/", (req,res)=>{
    res.send("Hello world")
})

// test route
app.get("/api/test",(req,res)=>{
    res.json({user:"James Dai"});
})


app.use("/api/jobs",jobRouter)

app.use("/api/auth",authRouter)

app.use("/api/users",userRouter)


// Single service deployment - serve both API and static files
    if(process.env.NODE_ENV === "production"){
    // Set static folder
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // Serve React app for all non-API routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
    } else {
    app.get("/", (req, res) => {
        res.send("API is running in development mode...");
    });
    }


app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("Server is running on port",port)
})
