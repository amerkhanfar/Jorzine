import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo src='/assets/logo.png' alt='Jorzine Logo' />
        <LinksContainer>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>News</Link>
          <Link href={"/"}>Interviews</Link>
          <Link href={"/"}>Gallery</Link>
          <Link href={"/"}>Events</Link>
        </LinksContainer>

        <MenuIcon>
          <AiOutlineMenu />
        </MenuIcon>
      </Nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;

  @media screen and (max-width: 821px) {
    top: 0;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 821px) {
    width: 40%;
  }
`;

const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0px;

  @media screen and (max-width: 821px) {
    width: 90%;
    padding: 2rem 0px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 3rem;
  @media screen and (max-width: 821px) {
    display: block;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  color: white;
  font-size: 1.8rem;
  font-weight: 200;
  @media screen and (max-width: 821px) {
    display: none;
  }
`;