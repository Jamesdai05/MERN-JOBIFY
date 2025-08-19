import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.nav`
    height: var(--nav-height);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: var(--primary-350);

    li {
        cursor: pointer;
        color: var(--white);
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--ternary-500);
        &:hover {
            color: var(--primary-500);
        }
    }

    a {
        text-decoration: none;
    }

    .menu {
        display: flex;
        list-style: none;
        gap: 2rem;

        @media (max-width: 768px) {
            position: absolute;
            top: 3rem;
            right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
            flex-direction: column;
            width: 250px;
            padding: 0.5rem 1rem;
            background: #0066ff;
            transition: right 0.3s ease-in-out;
            padding: 20px 0;
            gap: 0.5rem;
            li {
                padding: 0.5em 1em;
            }
        }
    }
`;

const Hamburger = styled.div`
    display: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;



const Navbar = () => {

    const[isOpen,setIsOpen]=useState(false)

  return (
      <Wrapper isOpen={isOpen}>
          <Logo />
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
              {/* <FaBars/> */}
          </Hamburger>
          <ul className="menu">
              <Link to="/">
                  <li>Home</li>
              </Link>
              <Link to="/landing">
                  <li>LandingPage</li>
              </Link>
              <Link to="/login">
                  <li>Edit</li>
              </Link>
              <Link to="/register">
                  <li>Admin</li>
              </Link>
              <Link to="/dashboard">
                  <li>Dashboard</li>
              </Link>
          </ul>
      </Wrapper>
  );
}
export default Navbar