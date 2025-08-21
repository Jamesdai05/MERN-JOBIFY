import styled from "styled-components";



const Wrapper=styled.main`
    display:flex;
    min-height:calc(100vh - var( --nav-height)- 1rem);
    width:100vw;
    margin: 10rem auto;
    justify-content:center;
    align-items:center;

    .form {
        display:flex;
        flex-direction:column;
        gap:1.2rem;
        max-width:1200px;
        align-items:space-between;
        justify-content:space-evenly;
        border: 1px solid var(--primary-300);
        /* border-top: 5px solid var(--primary--500); */
        padding:2.5rem;
        border-radius:10px;
        background-color: var(--secondary-350);
        color: var(--primary-50);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

        .form-control {
            display:flex;
            justify-content:space-between;
            gap:1.5em;
            width:100%;
        }

        h3 {
            text-align:center;
            margin-bottom:2rem;
        }
        .form-label{
            font-size:1.2rem;
            min-width:120px;
        }

        .form-input{
            padding:0.5em 0.3em;
            min-width:16em;
            font-size:1.2em;
            border:none;
            border-radius:0.5em;
        }
        .form-input::placeholder{
            font-size:1.2em;
        }
    }

    .submit{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;

        .btn{
            width:100%;
            padding:0.6rem;
            font-size:1.2em;
            border:none;
            border-radius:10px;
            color:var(--primary-50);
            background-color: var(--secondary-500);
            margin-bottom:0.8rem;
        }

        .btn:hover{
            cursor: pointer;
        }
        .link{
            padding:0.2em;
            display:inline;
            /* font-size:1.1em; */
            /* text-decoration:none; */
        }

        .link:hover{
            color: var(--secondary-50);
            font-weight: bold;
            transition: 0.5s;
        }
    }

      /* Responsive adjustments */
  @media (max-width: 768px) {
    margin: 5rem auto;

    .form {
      padding: 1.5rem;
      width: 95%;

      .form-control {
        flex-direction: column;
        gap: 0.8rem;
      }

      .form-input {
        max-width: 100%;
      }
    }
  }


`

export default Wrapper;