import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
const app=express();

dotenv.config()

const port= process.env.PORT || 4000






app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));


app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.post("/",(req,res)=>{
    console.log(req.body.title)
    res.send("Post request submitted.")
})




app.listen(port,()=>{
    console.log("Server is running on port",port)
})
