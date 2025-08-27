// import { toast } from "react-toastify";
import Logo2 from "../components/Logo2.jsx";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import { Link,useNavigation,Form} from "react-router-dom";
// import axios from "axios";





const Login = () => {
    const navigation=useNavigation()
    const isSubmitting=navigation.state === "submitting";

  return (
      <Wrapper>
          <Form className="form" method="post">
              <Logo2 />
              <h3>Login</h3>
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
              <div className="submit">
                  <button className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Submit"}
                  </button>
                  <div>
                      New User ?{" "}
                      <Link className="link" to="/register">
                          Sign Up
                      </Link>
                  </div>
              </div>
          </Form>
      </Wrapper>
  );
}
export default Login