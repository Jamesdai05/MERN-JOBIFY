import axios from "axios";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    // const data = Object.fromEntries(formData);
    // console.log(data);
    // const {email,location,name}=data

    // if(!email || !location || !name){
    //     toast.info("Please fill out all the fields!")
    // }

    // to handle file uploading, we need to control the size of file in the front end.
    // and we need to use multipart/form-data to send the data to backend.
    // so we need to create a new formData object and append the data to it.

    const file = formData.get("avatar");
    if (file && file.size > 512000) {
        // 0.5MB = 512000 bytes
        toast.error("File size too large. Max size is 0.5MB.");
        return null;
    }

    try {
        const { data } = await axios.patch(
            "/api/users/profile/edit",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );
        // console.log(data);
        console.log("Profile update response:", data);
        // Check that user data exists
        // Make sure the server returned JSON
        if (!data || typeof data !== "object" || !data.user) {
            toast.error("Profile update failed: invalid server response.");
            console.error("Invalid server response:", data);
            return null;
        }

        toast.success("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(data.user));
        return null; //stay on the same page
    } catch (err) {
        console.error(
            "Profile update error:",
            err.response?.data?.message || err.message
        );
        if (err.response?.data?.details) {
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach((error) => toast.error(error));
            return null;
        }
        toast.error(err.response?.data?.message || "failed to update profile");
    }
    return null; //stay on the same page
};