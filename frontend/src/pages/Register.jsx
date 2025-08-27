import { Link, useNavigation, Form } from "react-router-dom";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import Logo2 from "../components/Logo2.jsx";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const action = async ({ request }) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);

//     // Client-side validation for password confirmation
//     if (data.password !== data.confirmPassword) {
//         toast.error("Passwords do not match");
//         return null;
//     }

//     // Basic validation for password length
//     if (data.password.length < 6) {
//         toast.error("Password must be at least 6 characters long");
//         return null;
//     }

//     // Basic validation for email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(data.email)) {
//         toast.error("Please enter a valid email address");
//         return null;
//     }

//     console.log(data);
//     try {
//         await axios.post("api/auth/register", data, {
//             withCredentials: true,
//         });
//         toast.success("Registration is successfully!");
//         return redirect("/login");
//     } catch (err) {
//         console.error("Register error:", err.response?.data || err.message);
//         console.log(err);
//         // Handle validation errors from backend
//         if (err.response?.data?.details) {
//             const errors = Array.isArray(err.response.data.details)
//                 ? err.response.data.details
//                 : [err.response.data.details];
//             errors.forEach(error => toast.error(error));
//             return null;
//         }

//         // Handle general errors
//         const errorMessage = err.response?.data?.message || "Registration failed";
//         toast.error(errorMessage);
//         return null;
//     }
// };

const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Wrapper>
            <Form className="form" method="post">
                <Logo2 />
                <h3>Register</h3>

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
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-input"
                        name="password"
                        id="password"
                        placeholder="enter the password"
                        required
                        // minLength={6}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword" className="form-label">
                        ConfirmPassword
                    </label>
                    <input
                        type="password"
                        className="form-input"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="enter the confirmPassword"
                        required
                        // minLength={6}
                    />
                </div>
                <div className="submit">
                    <button className="btn" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    <div id="link">
                        <span>Already have an account ? {""}</span>
                        <Link className="link" to="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
};
export default Register;
