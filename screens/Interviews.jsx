import React from "react";
import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const Interviews = () => {
  return (
    <Container>
      <div style={{ position: "absolute", bottom: "-300px", right: "0" }}>
        <img src='/assets/play_bg_right.png' />
      </div>
      <SubContainer>
        <TextContainer>
          <SectionHeading>Latest Interviews</SectionHeading>
          <HeadingHr />
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aliquam excepturi debitis optio non iste repudiandae inventore,
            deleniti, enim eveniet voluptates ipsum rerum tenetur quo?
          </p>
          <FullButton>View All Interviews</FullButton>
        </TextContainer>
        <Grid>
          <ImageContainer>
            <Overlay>
              <div style={{ color: "white", fontSize: "3rem" }}>
                <Link href={"/"}>
                  <AiOutlineLink />
                </Link>
              </div>
            </Overlay>
          </ImageContainer>
          <ImageContainer>
            <Overlay>
              <div style={{ color: "white", fontSize: "3rem" }}>
                <Link href={"/"}>
                  <AiOutlineLink />
                </Link>
              </div>
            </Overlay>
          </ImageContainer>
          <ImageContainer>
            <Overlay>
              <div style={{ color: "white", fontSize: "3rem" }}>
                <Link href={"/"}>
                  <AiOutlineLink />
                </Link>
              </div>
            </Overlay>
          </ImageContainer>
          <ImageContainer>
            <Overlay>
              <div style={{ color: "white", fontSize: "3rem" }}>
                <Link href={"/"}>
                  <AiOutlineLink />
                </Link>
              </div>
            </Overlay>
          </ImageContainer>
        </Grid>
      </SubContainer>
    </Container>
  );
};

export default Interviews;

const Container = styled.div`
  width: 100vw;
  margin-bottom: 25rem;
  display: flex;
  justify-content: center;
  overflow: visible;
  position: relative;

  @media (max-width: 821px) {
    height: 90vh;
  }
`;

const SubContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 821px) {
    width: 93%;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  width: 40%;

  @media (max-width: 821px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    text-align: center;
  }
`;
const SectionHeading = styled.h2`
  font-size: 4rem;
  color: #f60038;
  font-weight: 700;
  text-transform: uppercase;
`;

const HeadingHr = styled.div`
  width: 7rem;
  height: 4px;
  background-color: #f60038;
  align-self: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 10px;

  @media (max-width: 821px) {
    width: 90%;
    height: 50vh;
  }
`;

const Overlay = styled.div`
  background: rgb(0, 0, 0, 0.7);
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 49%;
  height: 47%;

  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease-in-out;

  &:hover ${Overlay} {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 821px) {
    width: 47%;
  }
`;

const FullButton = styled.button`
  cursor: pointer;
  background: #f60038;
  color: white;
  border: transparent;
  padding: 1rem 2.4rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  height: 5rem;
  border-radius: 4px;
  align-self: center;
`;
