// import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import Wrapper from "./wrapper/jobContainer.js";
import { useAllJobsContext } from "../pages/Admin/AllJobs.jsx";

const JobsContainer = () => {
    // const { data } = useLoaderData() || { data: [] };
    const {data}=useAllJobsContext() || {data:[]};
    // console.log("JobsContainer data:", data);

    if (!data || data.length === 0) {
        return (
            <Wrapper>
                <h2>There is no jobs to display yet!...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                Search Jobs
            </h5>
            <div className="jobs">
                {data.map((job) => (
                    <Job key={job._id} job={job} />
                ))}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
