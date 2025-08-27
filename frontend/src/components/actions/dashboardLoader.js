import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";


export const loader=async()=>{
    try {
        const {data}=await axios.get("api/users/profile")

        return data;
    } catch (err) {
        toast.error(err.message);
        return redirect("/");
    }
}