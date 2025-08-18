import NotFound from "../assets/Not-found.svg";
import Wrapper from "../components/wrapper/errorPage.js"

const Error = (error) => {
  return (
    <Wrapper>
      <img src={NotFound} alt="notfound" />
      <h3>The page you're looking for does not exist</h3>
      <p>{error?.data?.message}</p>
    </Wrapper>
  );
}
export default Error