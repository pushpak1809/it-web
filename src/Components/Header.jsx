import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo1.png";
import "../App.css";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import back from "../images/home-img.jpg";
const Header = () => {
  //Function for header changing color on scroll
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Slider>
        {/* Start of Navbar */}
        <Nav className={navbar ? "navbar active" : "navbar"}>
          <NavbarContainer>
            <NavLogo to="/">
              <img src={logo} alt="" />
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="home">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="admission">Admission</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="faculties">Faculties</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="academics">Academics</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="placements">Placements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        {/* End of Navbar */}
      </Slider>
    </>
  );
};

// Start of slider
const Slider = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${back});
  background-size: cover;
`;

// Start of navbar css
const Nav = styled.nav``;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
  img {
    width: 50%;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const NavItem = styled.li`
  height: 80px;
`;
const NavLinks = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  margin-right: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: #6842ef;
  }
`;

export default Header;
