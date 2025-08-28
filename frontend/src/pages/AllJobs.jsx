import { Form, Link } from "react-router-dom";
import JobsContainer from "../components/JobsContainer";
import axios from "axios";
import { toast } from "react-toastify";

export const loader = async () => {
    try {
        const { data } = await axios.get("/api/jobs");
        return { data };
    } catch (err) {
        toast.error(err?.response?.data?.message);
        return { data: [] };
    }
};

const AllJobs = () => {
    return (
        <>
            <section>
                <h1>All Jobs</h1>
                <Link to="/dashboard/add-job" className="btn">
                    Add Job
                </Link>
            </section>
            <Form>
                <h4>Search Form</h4>
                <div className="form-center">
                    <div className="form-row">
                        <label htmlFor="search" className="form-label">
                            Search
                        </label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="form-input"
                            // defaultValue=""
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="jobStatus" className="form-label">
                            Job Status
                        </label>
                        <select
                            name="jobStatus"
                            id="jobStatus"
                            className="form-select"
                            defaultValue="all"
                        >
                            <option value="all">all</option>
                            <option value="pending">pending</option>
                            <option value="interview">interview</option>
                            <option value="declined">declined</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="jobType" className="form-label">
                            Job Type
                        </label>
                        <select
                            name="jobType"
                            id="jobType"
                            className="form-select"
                            defaultValue="all"
                        >
                            <option value="all">all</option>
                            <option value="full-time">full-time</option>
                            <option value="part-time">part-time</option>
                            <option value="internship">internship</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="sort" className="form-label">
                            Sort
                        </label>
                        <select
                            name="sort"
                            id="sort"
                            className="form-select"
                            defaultValue="newest"
                        >
                            <option value="newest">newest</option>
                            <option value="oldest">oldest</option>
                            <option value="a-z">a-z</option>
                            <option value="z-a">z-a</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">
                        Search
                    </button>
                    <button type="button" className="btn btn-danger">
                        Clear
                    </button>
                </div>
            </Form>
            <JobsContainer />
        </>
    );
};

export default AllJobs;
