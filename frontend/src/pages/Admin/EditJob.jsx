import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../../components/wrapper/dashboardForm.js";
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/constants.js";
import { toast } from "react-toastify";
import axios from "axios";

export const loader=async({params})=>{
  // console.log(params)
  try{
    const { data } = await axios.get(`/api/jobs/${params.id}`);
    // console.log(data);
    return data;
  }catch(err){
    toast.error(err?.response?.data?.message || "Failed to fetch the job!")
    return redirect("/dashboard/all-jobs");
  }
}


export const action=async({request,params})=>{
    const formData=await request.formData();
    const data=Object.fromEntries(formData)

    console.log("Updating job:", params.id, data);

    try {
        await axios.put(`/api/jobs/edit/${params.id}`,data)
        toast.success("Updated successfully!");
        return redirect("/dashboard/all-jobs");
    } catch (err) {
        console.error("Update job error:", err.response?.data?.message || err.message);
        if(err.response?.data?.details){
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach((error) => toast.error(error));
        }
        toast.error(err.response?.data?.message || "Failed to update job");
        return ({error:err.response?.data?.message})
    }
}





const EditJob = () => {
  // const {job} = useLoaderData()
  // console.log(job);
  // console.log("🔥 EditJob component is rendering!");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const job = useLoaderData();
  // console.log("Raw loader data:", job);

  if (!job) {
      return <div>Loading...</div>;
  }

  return (
      <Wrapper>
          <Form method="put" className="form">
              <h4 className="form-title">Edit Job</h4>
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
                          defaultValue={job.position}
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
                          defaultValue={job.company}
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
                          placeholder="enter the company"
                          defaultValue={job.location}
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
                          defaultValue={job.jobStatus}
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
                          defaultValue={job.jobType}
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
                      <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                  </div>
              </div>
          </Form>
      </Wrapper>
  );
}
export default EditJob