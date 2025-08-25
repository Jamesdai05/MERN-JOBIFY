import Wrapper from '../components/wrapper/landingPage.js';
import { Link } from 'react-router-dom';
import main from "../assets/main.svg";
import Logo from '../components/Logo.jsx';

const LandingPage = () => {


  return (
      <Wrapper>
          <nav>
            <Logo />
          </nav>
          <div className="container page">
              <div className="info">
                  <h1>
                      Job <span>Tracking</span> App
                  </h1>
                  <p>
                      The Job Tracking App is a modern web and mobile
                      application designed to simplify and organize the job
                      search process. In today’s competitive market, managing
                      multiple job applications across different platforms can
                      quickly become overwhelming. This app provides a
                      centralized and intuitive solution that allows users to
                      easily track, update, and monitor their job applications
                      from start to finish. With a clean and user-friendly
                      interface, the app enables users to add job details, set
                      reminders, and update statuses such as “Applied,”
                      “Interview Scheduled,” “Offer Received,” or “Rejected.”
                      The goal is to give job seekers a clear overview of where
                      they stand in their career journey at any given moment. By
                      consolidating all job search activities into one place,
                      the app helps reduce stress and ensures that no
                      opportunities are missed.
                  </p>
                  <div className="links">
                      <Link to="/register" className="btn register">
                          Register
                      </Link>
                      <Link to="/login" className="btn login">
                          Login
                      </Link>
                  </div>
              </div>
              <img src={main} alt="job hunting" className="img main-img" />
          </div>
      </Wrapper>
  );
}
export default LandingPage