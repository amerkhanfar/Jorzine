import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import { Side, SideContent } from "./Navbar";

const Navbar = () => {
  const router = useRouter();
  const [side, setSide] = useState(false);
  return (
    <Container>
      {side ? (
        <Side>
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.5rem",
              fontSize: "2.6rem",
              color: "white",
            }}
            onClick={() => {
              setSide(false);
            }}>
            X
          </div>
          <SideContent
            onClick={() => {
              router.push("/");
            }}>
            Home
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/news");
            }}>
            News
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/Reviews");
            }}>
            Reviews
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/interviews");
            }}>
            Interviews
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/articles");
            }}>
            Articles
          </SideContent>
        </Side>
      ) : null}
      <Nav>
        <Logo
          src='/assets/logo.png'
          alt='Jorzine Logo'
          onClick={() => {
            router.push("/");
          }}
        />
        <LinksContainer>
          <Link href={"/"}>Home</Link>
          <Link href={"/news"}> News</Link>
          <Link href={"/Reviews"}>Reviews</Link>
          <Link href={"/interviews"}>Interviews</Link>

          <Link href={"/articles"}>Articles</Link>
        </LinksContainer>

        <MenuIcon>
          <AiOutlineMenu
            style={{ color: "white" }}
            onClick={() => {
              setSide(true);
            }}
          />
        </MenuIcon>
      </Nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  overflow: hidden;
  background: rgb(83, 83, 83);
  background: linear-gradient(
    39deg,
    rgba(83, 83, 83, 1) 0%,
    rgba(0, 0, 0, 1) 58%,
    rgba(83, 83, 83, 1) 100%
  );
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 150px;

  @media screen and (max-width: 821px) {
    top: 0;
  }
`;

const Logo = styled.img`
  cursor: pointer;
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
