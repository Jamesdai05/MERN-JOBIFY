import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-wrap:wrap;
    margin-top:2rem;
    gap:1rem;
    height:6rem;
    .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--secondary-500);
    border-radius: var(--border-radius);
    cursor:pointer;
  }
  .active{
    background:var(--secondary-500);
    color: var(--white);

  }
  .prev, .next {
    background: var(--background-secondary-color);
    border-color: transparent;
    border-radius: var(--border-radius);

    width: 100px;
    height: 40px;
    color: var(--secondary-500);
    text-transform:capitalize;
    letter-spacing:var(--letter-spacing);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.5rem;
    cursor:pointer;
  }

  .prev:hover, .next:hover{
    background:var(--secondary-500);
    color: var(--white);
    transition:var(--transition);
  }
  .dot{
    display:grid;
    place-items:center;
    cursor:pointer;
  }
`;


export default Wrapper