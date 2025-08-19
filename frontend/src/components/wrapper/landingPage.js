import styled from "styled-components";

const Wrapper = styled.section `
  nav {
    width:var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display:flex;
    align-items:center;
    margin-bottom:4rem;
  }

  .page{
    min-height:calc(100vh - var (--nav-height));
    display: grid;
    align-items:center;
    /* margin-top:-1rem; */
  }

  h1{
    font-weight: 700;
    span{
      color:var(--ternary-600);
    }
    margin-bottom:1.5rem;
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
    max-width: 35em;
  }

  .register{
    margin-right: 1rem;
  }

  .main-img{
    display:none;
  }

  .links {
    margin-top:1rem;
  }

  .btn{
    padding: 0.75rem 1rem;
    background-color: var(--secodary-500);
    border-radius:5px;
    text-decoration:none;
    color:var(--primary-50);
    font-weight: 600;

  }

  @media (min-width:990px) {
    .main-img{
      display:block;
      /* margin-top:1rem; */
    }
    .page{
      display: grid;
      grid-template-columns:1fr 400px;
    }
  }
`;


export default Wrapper;