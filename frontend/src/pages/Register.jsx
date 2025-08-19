import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import Logo2 from "../components/Logo2.jsx";


const Register = () => {
    return (
        <Wrapper>
            <form action="/register" className="form">
                <Logo2/>
                <h3>Register</h3>
                <div className="form-control">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-input" name="name" placeholder="enter the name"require />
                </div>
                <div className="form-control">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="text" className="form-input" name="email" placeholder="enter the email" require />
                </div>
                <div className="form-control">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-input"
                        name="password"
                        placeholder="enter the password"
                        require
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
                        placeholder="enter the confirmPassword"
                        require
                    />
                </div>
                <div className="submit">
                  <button className="btn">Submit</button>
                  <div>
                    Already have an account ? {" "}
                    <Link
                      className="link"
                      to="/login"
                     >Log In</Link>
                  </div>
                </div>
            </form>
        </Wrapper>
    );
};
export default Register;
