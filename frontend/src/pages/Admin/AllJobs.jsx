import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import JobsContainer from '../../components/JobsContainer';
import SearchContainer from "../../components/SearchContainer.jsx";
import { createContext, useContext } from "react";


export const loader=async()=>{
  try {
    const {data}=await axios.get("/api/jobs/all-jobs");
    // redirect("")
    return {data}
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err;
  }
}

const AllJobsContext=createContext()
const AllJobs = () => {
  const {data}=useLoaderData();
  console.log(data)

  if (data instanceof Error) {
      return <div>Error loading jobs. Please try again.</div>;
  }

  return (
    <AllJobsContext.Provider value={{data}}>
      <SearchContainer/>
      <JobsContainer/>
    </AllJobsContext.Provider>
  )
}

export const useAllJobsContext=()=>useContext(AllJobsContext)
export default AllJobs