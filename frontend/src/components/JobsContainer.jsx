// import { useLoaderData } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";
import JobCard from "./JobCard.jsx";
import Wrapper from "./wrapper/jobContainer.js";

const JobsContainer = () => {
    // const { data } = useLoaderData() || { data: [] };
    const { jobs } = useAllJobsContext() || { jobs: [] };
    console.log("JobsContainer data:", jobs);

    if (!jobs || jobs.length === 0) {
        return (
            <Wrapper>
                <h2>There is no jobs to display yet!...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>Search Jobs</h5>
            <div className="jobs">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
