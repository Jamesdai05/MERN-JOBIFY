import axios from "axios";

export const loader=async()=>{
    try {
        const {data}=await axios.get("/api/jobs/stats")
        console.log(data)
        return data

    } catch (err) {
        console.error("Failed to Load data",err)
        return null
    }
}