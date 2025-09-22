import axios from "axios";
import { FaSuitcase, FaCalendarCheck } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";

import { useLoaderData} from "react-router-dom";
// import { toast } from "react-toastify";
import Wrapper from "../../components/wrapper/statsContainer.js";
import StatItem from "../../components/StatsItem";

// export const loader=async()=>{
//   try {
//     const response=await axios.get("/api/users/admin/stats");
//     console.log(response)
//     return response.data;
//   } catch (err) {
//     toast.error("You are not authorized to view this page!");
//     console.error(err.response?.data?.message)
//     return redirect ("/dashboard")
//   }
// }



const Admin = () => {
  const data=useLoaderData()
  console.log(data)
  const {userCount,jobCount,increasedJobs,increasedUsers} = data
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
          <StatItem
              title="User count increased in past"
              count={increasedUsers}
              color="#9A3F3F"
              bcg="#fcefc7"
              icon={<BsClipboardDataFill />}
          />
          <StatItem
              title="Jobs increased"
              count={increasedJobs}
              color="#647acb"
              bcg="#e0e8f9"
              icon={<FaCalendarCheck />}
          />
      </Wrapper>
  );
}
export default Admin