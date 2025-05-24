import styled from "styled-components";

const StyledButton=styled.button`
  background:red;
  font-size:20px;
  padding:0.5em;
`


const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <StyledButton>Click me</StyledButton>
    </>
  );
}
export default Dashboard