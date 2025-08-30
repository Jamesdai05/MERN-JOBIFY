import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action=async({params})=>{
  console.log(params);
  try {
    await axios.delete(`/api/jobs/delete/${params.id}`)
    toast.success("Job deleted successfully!");
    
  } catch (err) {
    const error=err.response?.data?.message || "Job deleting failed!";
    toast.error(error)
    // return {errorMsg:error}
    // return redirect("/dashboard/all-jobs")
  }
  return redirect("/dashboard/all-jobs");
}




// const DeleteJob = () => {
//   return (
//     <div>DeleteJob</div>
//   )
// }
// export default DeleteJob