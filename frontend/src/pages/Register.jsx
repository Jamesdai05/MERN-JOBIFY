import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import Logo2 from "../components/Logo2.jsx";
import { useState } from "react";


const Register = () => {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    })





    return (
        <Wrapper>
            <form action="/register" className="form">
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
                        type="email"
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
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword" className="form-label">
                        ConfirmPassword
                    </label>
                    <input
                        type="password"
                        className="form-input"
                        name="confirmpassword"
                        id="confirmPassword"
                        placeholder="enter the confirmPassword"
                        required
                    />
                </div>
                <div className="submit">
                    <button className="btn">Submit</button>
                    <div id="link">
                        <span>Already have an account ? {""}</span>
                        <Link className="link" to="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};
export default Register;
