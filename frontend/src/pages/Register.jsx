import { Link, useNavigation, Form } from "react-router-dom";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import Logo2 from "../components/Logo2.jsx";


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
