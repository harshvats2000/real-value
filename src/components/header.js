import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Links } from "../constants";

const Container = styled.header``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 48px;
`;

const Logo = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 700px) {
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
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 5px;
  padding: 3px;
  @media (max-width: 700px) {
    padding: 5px 0;
    margin: 0 10px;
  }
  & > a {
    color: black;
    text-decoration: none;
    text-transform: capitalize;
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 27px;
  height: 27px;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 700px) {
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
          <Logo>Real Value</Logo>
          <MenuIcon onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
          <Nav>
            {Links.map((link, i) => (
              <NavItem key={i}>
                <Link to={`${link.url}`}>{link.label}</Link>
              </NavItem>
            ))}
          </Nav>
        </Wrapper>
        <MobileNav id="header-nav-mobile">
          {Links.map((link, i) => (
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
