import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import Wrapper from "../components/wrapper/JobsContainer.js";

const JobsContainer = () => {
    const jobs = useLoaderData();

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className="jobs">
                {jobs.map((job) => (
                    <Job key={job._id} job={job} />
                ))}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
