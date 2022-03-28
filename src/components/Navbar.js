import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
          <Logo to="/">
            PokeAPI<span>Assessment</span>
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <MenuLink to="/">Pokemon List</MenuLink>
            <MenuLink to="/mypokemon">My Pokemon</MenuLink>
          </Menu>
        </Nav>
      );
    };
    
    
    const MenuLink = styled(Link)`
      padding: 1rem 2rem;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      color: #4dad5b;
      transition: all 0.3s ease-in;
      font-size: 1.2rem;
      font-weight: bold;
      &:hover {
        color: #7b7fda;
      }
    `;
    
    const Nav = styled.div`
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background: white;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    `;
    
    const Logo = styled(Link)`
      padding: 1rem 0;
      color: #4dad5b;
      text-decoration: none;
      font-weight: 800;
      font-size: 1.7rem;
      span {
        font-weight: 300;
        font-size: 1.3rem;
      }
    `;
    
    const Menu = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
      }
    `;
    
    const Hamburger = styled.div`
      display: none;
      flex-direction: column;
      cursor: pointer;
      span {
        height: 2px;
        width: 25px;
        background: #4dad5b;
        margin-bottom: 4px;
        border-radius: 5px;
      }
      @media (max-width: 768px) {
        display: flex;
      }
    `;
