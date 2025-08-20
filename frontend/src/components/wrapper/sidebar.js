import styled from "styled-components";

const Wrapper=styled.aside`
    .sidebar-container{
      position:fixed;
      inset:0;  /* for the fixed position display, to adjust the position*/
      background-color: rgba(0,0,0,0.7);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:0;
      transition: var(--transition);
      visibility:hidden;
      opacity:0;
    }
    .show-sidebar {
      z-index: 99;
      opacity: 1;
      visibility: visible;
    }
    .content {
      background: var(--background-secondary-color);
      width: var(--fluid-width);
      height: 95vh;
      border-radius: var(--border-radius);
      padding: 4rem 2rem;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      left: 10px;
      background: transparent;
      border-color: transparent;
      font-size: 2rem;
      color: var(--red-dark);
      cursor: pointer;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content:center;
      height:50%;
      gap:1rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      text-transform: capitalize;
      transition: var(--transition);
      font-size:1.5rem;
    }
    .nav-link:hover {
      color: var(--primary-500);
    }
    .logo{
      display:block;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    @media (min-width: 992px) {
        display: none;
    }
`

export default Wrapper;