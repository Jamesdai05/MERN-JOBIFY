import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async () => {
    try {
        const { data } = await axios.get("/api/jobs");
        return data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Failed to load jobs");
        return redirect("/");
    }
};
