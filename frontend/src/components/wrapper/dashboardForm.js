import styled from "styled-components";

const Wrapper = styled.section`
    border-radius: var(--border-radius);
    width: 100%;
    background: var(--background-secondary-color);
    padding: 3rem 2rem 4rem;

    .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-title{
    margin-bottom:1.8rem;
  }
   .form-center {
    display: grid;
    grid-template-columns:repeat(3,1fr);
    /* grid-template-rows:1fr 1fr; */
    row-gap: 1rem;
  }
  .form-control{
    margin-bottom: 0;
    /* min-width:400px; */
  }

  .form-input,
  .form-select,
  .btn{
    width:80%;
  }

  .form-input::placeholder{
    font-size:1.2em;
  }

  .submit{
    margin-top:1rem;
    width:100%;
  }



  .btn{
    margin-top:1.1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: var(--secondary-500);
  }

`


export default Wrapper;