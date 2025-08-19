import styled from "styled-components";

const Wrapper=styled.div`
    display: none;
    @media (min-width: 992px) {
        display:block;
        box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
        .sidebar-container{
            height:100vh;
            background: var(--background-secondary-color);
        }
        .content{
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:1rem;
        }
        header {
            padding:1rem;
        }

        .nav-links{
            width:100%;
            margin:0 auto;
            display:flex;
            flex-direction:column;
            gap:2rem;
            align-items:center;
            padding: 2.5rem;
            font-size:1.5rem;
        }
        li{
            list-style-type:none;
        }

        a{
            text-decoration:none;
            color: var(--text-color);
        }
    }

`


export default Wrapper;