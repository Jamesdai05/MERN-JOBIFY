import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper/job.js";
import JobInfo from "./JobInfo";
import { useDashboardContext } from "../pages/Admin/DashboardLayout";

const Job = ({ job }) => {
    const { position, company, location, jobStatus, jobType, createdAt, _id } = job;
    const { user } = useDashboardContext();

    const date = new Date(createdAt).toLocaleDateString();

    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <JobInfo icon={<FaLocationArrow />} text={location} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={`status ${jobStatus}`}>
                        <span>{jobStatus}</span>
                    </div>
                </div>
                <footer>
                    <div className="actions">
                        <Link
                            to={`/dashboard/edit-job/${_id}`}
                            className="btn edit-btn"
                        >
                            Edit
                        </Link>
                        <button className="btn delete-btn">Delete</button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};

export default Job;
