import axios from "axios";
import { redirect} from "react-router-dom";
import { toast } from "react-toastify";


export const loader = async ({request}) => {
    try {
        const params =Object.fromEntries([
            ...new URL(request.url).searchParams.entries()
        ])

        const {data} = await axios.get("/api/jobs/all-jobs",{params});
        console.log(params)
        console.log(data)
        return {data,searchValues:{...params}}
    } catch (err) {
        toast.error(err.response?.data?.message || "Failed to load jobs");
        return redirect("/");
    }
};
