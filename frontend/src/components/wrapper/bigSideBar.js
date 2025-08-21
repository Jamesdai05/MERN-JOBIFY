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
        .show-sidebar {
            display:none;
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
            font-size:1.15rem;

        }
        .nav-link{
            width:135px;
            display:flex;
            gap:1rem;
            align-items:center;
            padding:0 1rem;
            text-transform:capitalize;
            color:var(--secondary-500);
        }
        .nav-link:hover{
            scale:1.2;
            color:var(--secondary-400);
            transition:var(--transition)
        }
        li{
            list-style-type:none;
        }

        a{
            text-decoration:none;
        }
    }

`


export default Wrapper;