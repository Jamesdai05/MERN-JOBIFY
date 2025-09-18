import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";


export const loader=async()=>{
    try {
        const {data}=await axios.get("api/users/profile")

        // return data;
        localStorage.setItem("user", JSON.stringify(data));
        return {
            name: data.name ?? "User",
            avatar: data.avatar ?? null,
            email: data.email ?? "",
            role: data.role ?? "user",
        };
    } catch (err) {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            return JSON.parse(savedUser);
        }
        toast.error(err.response?.data?.message || err.message);
        // return redirect("/");
        return redirect("/login");
    }
}