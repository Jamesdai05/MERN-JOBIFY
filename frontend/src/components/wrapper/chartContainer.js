import styled from "styled-components";


const Wrapper = styled.section`
    margin-top:4rem;
    text-align:center;
    border: 1px solid lightblue;
    overflow:hidden;

    .button{
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        color: var(--secondary-500);
        font-size: 1.25rem;
        cursor: pointer;
        padding:0.5rem;
    }
    h4 {
        margin-top:0.5rem;
        text-align: center;
        margin-bottom: 0.75rem;
    }
`

export default Wrapper