import styled from "styled-components";

const Wrapper=styled.main`
    min-height:100vh;
    text-align:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    img {
        width:85vw;
        max-width:600px;
        display:block;
        margin-bottom: 2rem;
        margin-top: -3rem;
    }
    h3 {
        margin-bottom:0.8rem;
    }

    p {
        line-height: 1.5;
        margin-top:0.5rem;
        margin-bottom:1.5rem;
        color:var(--text-secondary-color);
    }
    .btn {
        color: var(--primary-50);
        text-transform: capitalize;
        text-decoration:none;
        font-weight:700;
        background-color:var(--ternary-600);
        padding:0.8em;
        border-radius:5px;
    }
`

export default Wrapper;