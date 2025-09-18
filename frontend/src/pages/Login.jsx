import { toast } from "react-toastify";
import Logo2 from "../components/Logo2.jsx";
import Wrapper from "../components/wrapper/RegistrationAndLogin.js";
import { Link,Form, useNavigate} from "react-router-dom";
import axios from "axios";





const Login = () => {
    const navigate=useNavigate()
    const isSubmitting=navigation.state === "submitting";

    const demoUserLogin=async()=>{
        const data={
            email:"alice.demo@test.com",
            password:"demoPass123"
        }

        try {
            const response = await axios.post("/api/auth/login", data, {
                withCredentials: true,
            });
            const user = response.data;
            // console.log("Login successful:", user);

            localStorage.setItem("user", JSON.stringify(user));

            toast.success("Log in successfully!");
            return navigate("/dashboard");
        } catch (error) {
            console.error("Demo Login error:", error.response?.data || error.message);
            const errorMessage =
                error.response?.data?.message || "Test user login failed";
            toast.error(errorMessage);
            return null;
        }
    }

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
                  <button className="btn" disabled={isSubmitting} onClick={demoUserLogin} type="button">
                      {isSubmitting ? "Submitting" : "Log in for app demo"}
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