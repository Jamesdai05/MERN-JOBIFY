import styled from "styled-components";

const Wrapper = styled.section `
  nav {
    width:var(--fluid-width);
    max-width: var(--max-width);
    margin: 1rem auto;
    display:flex;
    align-items:center;
    margin-bottom:4rem;
    /* height: calc( var(--nav-height) + 6rem); */
  }

  .page{
    min-height:calc(100vh - var(--nav-height));
    display: grid;
    align-items:center;
    margin:0 auto;
    margin-top:-3rem;
    padding:0 2rem;
    /* overflow-y:hidden; */
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
    background-color: var(--secondary-500);
    border-radius:5px;
    text-decoration:none;
    color:var(--primary-50);
    font-weight: 600;

  }

  @media (min-width:786px) {
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