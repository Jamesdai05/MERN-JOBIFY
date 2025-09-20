import { useState } from "react";
import Wrapper from "./wrapper/chartContainer.js"
import StatsBarChart from "./StatsBarChart";
import JobsPieChart from "./JobsPiechart";



const ChartContainer = ({monthlyData}) => {
  const [barChart,setBarChart]=useState(true);

  const handleClick=()=>setBarChart(prev=>!prev)
  // console.log(monthlyData)
  return (
      <Wrapper>
          <h4>Monthly Applications</h4>
          <button className="button" onClick={handleClick}>
              {barChart ? "PieChart" : "barChart"}
          </button>
          {barChart ? (
              <StatsBarChart data={monthlyData} />
          ) : (
              <JobsPieChart data={monthlyData} />
          )}
      </Wrapper>
  );
}
export default ChartContainer