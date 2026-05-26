import { Form,useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../components/wrapper/dashboardForm.js";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants.js";

const EditJob = () => {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const job = useLoaderData();
    console.log("Raw loader data:", job);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <Wrapper>
            <Form method="post" className="form">
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
                        <button
                            type="submit"
                            className="btn btn-block form-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
};
export default EditJob;
