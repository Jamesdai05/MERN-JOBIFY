import axios from "axios";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import JobsContainer from "../components/JobsContainer.jsx";
import SearchContainer from "../components/SearchContainer.jsx";
import { createContext, useContext } from "react";

// export const loader = async () => {
//     try {
//         const { data } = await axios.get("/api/jobs/all-jobs");
//         // redirect("")
//         console.log("Loader response:", data);
//         return data;
//     } catch (err) {
//         toast.error(err?.response?.data?.message);
//         return err.response?.data?.message;
//     }
// };

const AllJobsContext = createContext();
const AllJobs = () => {
    const { data, searchValues } = useLoaderData();
    // const {jobs,totalJobs,currentPage,totalPages}=data
    const { user} = useOutletContext();
    // console.log(data);

    // if (jobs instanceof Error) {
    //     return <div>Error loading jobs. Please try again.</div>;
    // }

    return (
        <AllJobsContext.Provider
            value={{ data, searchValues, }}
        >
            <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
