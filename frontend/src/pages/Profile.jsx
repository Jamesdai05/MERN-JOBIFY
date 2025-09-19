import axios from "axios";
import Wrapper from "../components/wrapper/dashboardForm.js";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    // const data = Object.fromEntries(formData);
    // console.log(data);

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

const Profile = () => {
    const { user } = useOutletContext();
    const { name, email, location } = user;
    const navigation = useNavigation();

    const isSubmmitting = navigation.state === "submitting";

    return (
        <Wrapper>
            <Form method="post" className="form" encType="multipart/form-data">
                <h4 className="form-title">Profile</h4>
                <div className="form-center">
                    <div className="form-control">
                        <label htmlFor="image" className="form-label">
                            Upload an image(Max 0.5MB);
                        </label>
                        <input
                            type="file"
                            className="form-input"
                            name="avatar"
                            id="avatar"
                            accept="image/*"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-input"
                            name="name"
                            id="name"
                            placeholder="enter the name"
                            defaultValue={name}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            className="form-input"
                            name="location"
                            id="location"
                            placeholder="enter the location"
                            defaultValue={location}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-input"
                            name="email"
                            id="email"
                            placeholder="enter the email"
                            defaultValue={email}
                            required
                        />
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="btn btn-block form-btn"
                        >
                            {isSubmmitting ? "Submmitting..." : "Submit"}
                        </button>
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
};
export default Profile;
