import Wrapper from "./wrapper/buttonContainer.js"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useAllJobsContext } from "../pages/AllJobs.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const PageButtonContainer = () => {
    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    console.log(search, pathname);
    const {
        data: { totalPages, currentPage },
    } = useAllJobsContext();
    // console.log(totalPages,currentPage)

    const handlePageChange=(pageNumber)=>{
        const searchParams=new URLSearchParams(search)
        searchParams.set("page",pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    const maxButtons = 4;
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - maxButtons + 1);
    }

    const pages = Array.from({ length: end-start+1 }, (_, index) => {
        return index + start;
    });




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
              {start > 1 && (
                  <>
                      <button
                          className={`btn page-btn ${
                              currentPage === 1 && "active"
                          }`}
                          onClick={() => handlePageChange(1)}
                      >
                          1
                      </button>
                      {start > 2 && <span className="dots">...</span>}
                  </>
              )}
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
              {end < totalPages && (
                  <>
                      {end < totalPages - 1 && <span className="dots">…</span>}
                      <button
                          onClick={() => handlePageChange(totalPages)}
                          className={`btn page-btn ${
                              currentPage === totalPages && "active"
                          }`}
                      >
                          {totalPages}
                      </button>
                  </>
              )}
          </div>
          <button className="next" onClick={handleNextButtonClick}>
              <FaAngleDoubleRight />
              Next
          </button>
      </Wrapper>
  );
}
export default PageButtonContainer