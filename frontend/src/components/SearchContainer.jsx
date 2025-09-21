import { Form, Link } from "react-router-dom";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants.js';
import Wrapper from "./wrapper/dashboardForm.js";



const SearchContainer = () => {
  return (
      <Wrapper>
          <Form>
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
                          required
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
                          defaultValue="all"
                          required
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
                          defaultValue="all"
                          required
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
                      <label htmlFor="sort by" className="form-label">
                          Sort By
                      </label>
                      <select
                          type="text"
                          className="form-select"
                          name="sort by"
                          id="sort by"
                          defaultValue="all"
                          required
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
              </div>
          </Form>
      </Wrapper>
  );
}
export default SearchContainer