import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";


export const loader = async ({ params }) => {
    // console.log(params)
    try {
        const { data } = await axios.get(`/api/jobs/${params.id}`);
        console.log(data);
        return data.job;
    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to fetch the job!");
        return redirect("/dashboard/all-jobs");
    }
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log("Updating job:", params.id, data);

    try {
        await axios.put(`/api/jobs/edit/${params.id}`, data);
        toast.success("Updated successfully!");
        return redirect("/dashboard/all-jobs");
    } catch (err) {
        console.error(
            "Update job error:",
            err.response?.data?.message || err.message
        );
        if (err.response?.data?.details) {
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach((error) => toast.error(error));
        }
        toast.error(err.response?.data?.message || "Failed to update job");
        return { error: err.response?.data?.message };
    }
};