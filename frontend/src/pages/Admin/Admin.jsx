import axios from "axios";
import { FaSuitcase, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData,redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../../components/wrapper/statsContainer.js";
import StatItem from "../../components/StatsItem";

export const loader=async()=>{
  try {
    const response=await axios.get("/api/users/admin/stats");
    console.log(response)
    return response.data;
  } catch (err) {
    toast.error("You are not authorized to view this page!");
    console.error(err.response?.data?.message)
    return redirect ("/dashboard")
  }
}



const Admin = () => {
  const {jobCount,userCount}=useLoaderData()

  console.log(userCount,jobCount)

  return (
      <Wrapper>
          <StatItem
              title="current users"
              count={userCount}
              color="#e9b949"
              bcg="#fcefc7"
              icon={<FaSuitcase />}
          />
          <StatItem
              title="total jobs"
              count={jobCount}
              color="#647acb"
              bcg="#e0e8f9"
              icon={<FaCalendarCheck />}
          />
      </Wrapper>
  );
}
export default Admin