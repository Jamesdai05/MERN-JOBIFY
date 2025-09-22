import Wrapper from "./wrapper/buttonContainer.js"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useAllJobsContext } from "../pages/AllJobs.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const PageButtonContainer = () => {
    const {data:{totalPages,currentPage}}=useAllJobsContext()
    // console.log(totalPages,currentPage)
    const pages=Array.from({length:totalPages},(_,index)=>{
        return index +1
    })

    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    console.log(search, pathname);

    const handlePageChange=(pageNumber)=>{
        const searchParams=new URLSearchParams(search)
        searchParams.set("page",pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }



    const handlePrevButtonClick=()=>{
        let prevPage=currentPage - 1
        if(prevPage<1) prevPage = totalPages
        handlePageChange(prevPage)
    }

    const handleNextButtonClick = () => {
        let nextPage = currentPage + 1;
        if (nextPage > totalPages) nextPage = 1;
        handlePageChange(nextPage);
    };

  return (
      <Wrapper>
          <button className="prev" onClick={handlePrevButtonClick}>
              <FaAngleDoubleLeft />
              Prev
          </button>
          <div className="btn-container">
              {pages.map((e) => (
                  <button
                      key={e}
                      className={`btn page-btn ${
                          e === currentPage && "active"
                      }`}
                      onClick={() => handlePageChange(e)}
                  >
                      {e}
                  </button>
              ))}
          </div>
          <button className="next" onClick={handleNextButtonClick}>
              <FaAngleDoubleRight />
              Next
          </button>
      </Wrapper>
  );
}
export default PageButtonContainer