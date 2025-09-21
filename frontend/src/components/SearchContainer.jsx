import { Form, Link, useSubmit } from "react-router-dom";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants.js';
import Wrapper from "./wrapper/dashboardForm.js";
import { useAllJobsContext } from "../pages/AllJobs";
import { useRef } from "react";

const SearchContainer = () => {
    // const navigation=useNavigation()
    // console.log(navigation)
    const { searchValues } = useAllJobsContext();
    // console.log(searchValues)
    const { search, sort_by, jobStatus, jobType } = searchValues;
    const submit = useSubmit();
    const handleChange=(e)=>submit(e.currentTarget.form)

    // Clear any previous timeout so we only submit after the user stops typing
    const debounceRef = useRef(null);

    const handleDebounceChange = (e) => {
        let form = e.currentTarget.form;
        clearTimeout(debounceRef.current);

        debounceRef.current=setTimeout(()=>{
            submit(form);
        },1000)
    };

    return (
        <Wrapper>
            <Form method="get" className="form">
                <h4>Search Job</h4>
                <div className="form-center">
                    <div className="form-control">
                        <label htmlFor="search" className="form-label">
                            Search
                        </label>
                        <input
                            type="text"
                            className="form-input"
                            name="search"
                            id="search"
                            placeholder="enter the search"
                            defaultValue={search}
                            onChange={handleDebounceChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="jobStatus" className="form-label">
                            Job Status
                        </label>
                        <select
                            type="text"
                            className="form-select"
                            name="jobStatus"
                            id="jobStatus"
                            placeholder="enter the status"
                            defaultValue={jobStatus}
                            onChange={handleChange}
                        >
                            <option value="all">All</option>
                            {Object.values(JOB_STATUS).map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="jobType" className="form-label">
                            Job Type
                        </label>
                        <select
                            type="text"
                            className="form-select"
                            name="jobType"
                            id="jobType"
                            defaultValue={jobType}
                            onChange={handleChange}
                        >
                            <option value="all">All</option>
                            {Object.values(JOB_TYPE).map((job) => (
                                <option key={job} value={job}>
                                    {job}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="sort_by" className="form-label">
                            Sort By
                        </label>
                        <select
                            type="text"
                            className="form-select"
                            name="sort_by"
                            id="sort_by"
                            defaultValue={sort_by}
                            onChange={handleChange}
                        >
                            <option value="">Sort By</option>
                            {Object.values(JOB_SORT_BY).map((ele) => (
                                <option key={ele} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="submit">
                        <Link
                            to="/dashboard/all-jobs"
                            className="btn btn-block form-btn"
                        >
                            Reset the search
                        </Link>
                    </div>
                    {/* <div className="submit">
                      <button
                          type="submit"
                          className="btn btn-block form-btn"
                          disabled={isSubmitting}
                      >
                          {isSubmitting ? "Submitting..." : "Sumbit"}
                      </button>
                  </div> */}
                </div>
            </Form>
        </Wrapper>
    );
}
export default SearchContainer