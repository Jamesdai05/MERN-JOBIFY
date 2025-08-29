import { Form, useOutletContext, redirect } from "react-router-dom"
import Wrapper from "../components/wrapper/dashboardForm.js";
import {JOB_TYPE,JOB_STATUS} from "../../../utils/constants.js"
import axios from "axios";
import { toast } from 'react-toastify';


export const action=async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
//   console.log(data);
  try {
      await axios.post("/api/jobs/add-job",data);
      toast.success("Job added successfully!");
      return redirect("/dashboard/all-jobs");
  }catch(err){
      console.error("Add job error:", err.response?.data || err.message);
      // Handle validation errors from backend
      if (err.response?.data?.details) {
          const errors = Array.isArray(err.response.data.details)
              ? err.response.data.details
              : [err.response.data.details];
          errors.forEach(error => toast.error(error));
          return null;
      }
      toast.error(
          err.response?.data?.message || err.message || "Something went wrong"
      );
      return null;
  }
}


const AddJob = () => {
  const {user}=useOutletContext();
  return (
      <Wrapper>
          <Form method="post" className="form">
              <h4 className="form-title">Add Job</h4>
              <div className="form-center">
                  <div className="form-control">
                      <label htmlFor="position" className="form-label">
                          Position
                      </label>
                      <input
                          type="text"
                          className="form-input"
                          name="position"
                          id="position"
                          placeholder="enter the position"
                          defaultValue="Software engineer"
                          required
                      />
                  </div>
                  <div className="form-control">
                      <label htmlFor="company" className="form-label">
                          Company
                      </label>
                      <input
                          type="text"
                          className="form-input"
                          name="company"
                          id="company"
                          placeholder="enter the company"
                          required
                      />
                  </div>
                  <div className="form-control">
                      <label htmlFor="location" className="form-label">
                          Location
                      </label>
                      <input
                          type="text"
                          className="form-input"
                          name="location"
                          id="location"
                          placeholder="enter the location"
                          defaultValue={user.location}
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
                          defaultValue={JOB_STATUS.PENDING}
                          required
                      >
                          <option value="">Select status</option>
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
                          placeholder="enter the type"
                          defaultValue={JOB_TYPE.FULL_TIME}
                          required
                      >
                          <option value="">Select a type</option>
                          {Object.values(JOB_TYPE).map((job) => (
                              <option key={job} value={job}>
                                  {job}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className="submit">
                      <button type="submit" className="btn btn-block form-btn">
                          Sumbit
                      </button>
                  </div>
              </div>
          </Form>
      </Wrapper>
  );
}
export default AddJob;