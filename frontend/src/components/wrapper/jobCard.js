import styled from "styled-components";

const Wrapper=styled.article`
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: grid;
    row-gap:0.5rem;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
    padding:0.8rem;

    header{
        display:flex;
        align-items:center;
        gap:1.5rem;
        padding-bottom:10px;
        border-bottom: 2px solid var(--grey-300);
    }

    .main-icon{
        height:60px;
        width:80px;
        display:grid;
        place-items:center;
        background-color:var(--secondary-500);
        color:var(--white);
        font-weight:bolder;
        font-size:1.2rem;
        border-radius:10px;
    }
    p{
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        color: var(--text-secondary-color);
    }

    .info{
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .content{
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }

    .content-center{
        margin-top:1.2em;
        margin-bottom:1em;
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
        gap:0.8em;
        align-items:center;
        @media (min-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .status{
        width:fit-content;
        padding:0.5em 0.8em;
        border-radius:3px;
        text-transform:capitalize;
    }
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        width: 400px;
        display:flex;
        flex-direction:column;
        text-align:center;
        gap:0.8rem;
    }

    .modal-actions{
        display:flex;
        flex-direction:column;
        gap:0.8em;
    }
    footer .actions{
        display:flex;
        gap:1rem;
    }

`


export default Wrapper;