import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

// loader must return something, either null or data.
export const loader=async()=>{
  try {
    const response=await axios.get("/api/users/admin/stats");
    console.log(response)
    return response.data;
  } catch (err) {
    toast.error("You are not authorized to view this page!");
    console.error(err.response?.data?.message)
    return redirect ("/dashboard")
  }
}