import ChartContainer from "../components/ChartContainer";
import StatsContainer from "../components/StatsContainer"
import { useLoaderData } from "react-router-dom"


const Stats = () => {
  const {defaultData, monthlyData}=useLoaderData()

  // console.log(monthlyData)

  return (
      <>
          <StatsContainer data={defaultData} />
          {monthlyData && monthlyData.length > 1 ? <ChartContainer monthlyData={monthlyData}/> : <p>No data yet</p>}
      </>
  );
}
export default Stats;