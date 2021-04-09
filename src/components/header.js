import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import { LINKS } from "../constants";

const Container = styled.header``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 48px;
  @media (min-width: 750px) {
    height: 70px;
    padding: 0 30px;
  }
`;

const Logo = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  @media (max-width: 750px) {
    display: none;
    flex-direction: column;
  }
`;
const MobileNav = styled.ul`
  list-style: none;
  flex-direction: column;
  overflow: hidden;
  transition: 0.5s;
  margin: 0;
  padding: 0;
  display: none;
  @media (min-width: 750px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;
  & > a {
    padding: 3px;
    height: 100%;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
    transition: 0.3s;
    border-bottom: 3px solid white;
    @media (max-width: 750px) {
      padding: 5px;
    }
    &:hover {
      border-bottom: 3px solid black;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 27px;
  height: 27px;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 750px) {
    display: flex;
  }
  & > span {
    display: block;
    background: black;
    height: 3px;
    width: 100%;
    border-radius: 15px;
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const el = document.querySelector("#header-nav-mobile");
    el.style.display = "flex";
    el.style.height = openMenu ? "136px" : "0";
  }, [openMenu]);

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <Link to="/">Real Value</Link>
          </Logo>
          <MenuIcon onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
          <Nav>
            {LINKS.map((link, i) => (
              <NavItem key={i}>
                <Link to={`${link.url}`}>{link.label}</Link>
              </NavItem>
            ))}
          </Nav>
        </Wrapper>
        <MobileNav id="header-nav-mobile">
          {LINKS.map((link, i) => (
            <NavItem key={i}>
              <Link to={`${link.url}`}>{link.label}</Link>
            </NavItem>
          ))}
        </MobileNav>
      </Container>
    </>
  );
};

export default Header;
