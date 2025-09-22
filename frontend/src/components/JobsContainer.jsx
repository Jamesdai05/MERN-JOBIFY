import PageButtonContainer from "./PageButtonContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import JobCard from "./JobCard.jsx";
import Wrapper from "./wrapper/jobContainer.js";

const JobsContainer = () => {
    const { data } = useAllJobsContext() || { jobs: [] };
    const {jobs,totalJobs,totalPages}=data
    // console.log("JobsContainer data:", jobs);

    if (!jobs || jobs.length === 0) {
        return (
            <Wrapper>
                <h2>There is no jobs to display yet!...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>{totalJobs} Job{jobs.length>1&&"s"} Found</h5>
            <div className="jobs">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
            {totalPages >1 && <PageButtonContainer/>}
        </Wrapper>
    );
};

export default JobsContainer;
