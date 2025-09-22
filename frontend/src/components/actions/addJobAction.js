import axios from "axios";
import { redirect} from "react-router-dom";
import { toast } from "react-toastify";


export const action=async({request})=>{
    const formData=await request.formData();
    const data=Object.fromEntries(formData);
    //   console.log(data);
    try {
        await axios.post("/api/jobs/add-job",data);
        toast.success("Job added successfully!");
        return redirect("/dashboard/all-jobs");
    }catch(err){
        console.error("Add job error:", err.response?.data || err.message);
        // Handle validation errors from backend
        if (err.response?.data?.details) {
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach(error => toast.error(error));
            return null;
        }
        toast.error(
            err.response?.data?.message || err.message || "Something went wrong"
        );
        return null;
    }
}