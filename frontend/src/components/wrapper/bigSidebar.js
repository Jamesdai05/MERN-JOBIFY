import styled from "styled-components";

const Wrapper=styled.aside`
    @media (max-width: 992px) {
        display: none;
  }

  .sidebar-container{
    position:fixed;
    inset:0;  /* for the fixed position display, to adjust the position*/
    background-color: rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:-1;
    transition:var(--transition);
    visibility:hidden;
  }
`

export default Wrapper;