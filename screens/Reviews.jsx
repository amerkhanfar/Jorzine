import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Audio } from "react-loader-spinner";

const Reviews = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/reviews",
      ); // Replace with your API endpoint
      const jsonData = response.data.reviews;
      console.log(jsonData);
      setData(jsonData.slice(0, 9)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "200px",
        }}>
        <img src='/assets/play_bg.png' width={400} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}>
        <SectionHeading>Latest Reviews</SectionHeading>
        <HeadingHr />
        <SectionBody>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some injected humour.
        </SectionBody>
        <ViewAll
          onClick={() => {
            router.push(`/Reviews`);
          }}>
          VIEW ALL REVIEWS
        </ViewAll>
      </div>

      <PerspectiveContainer>
        {data.length ? (
          <FlexContainer>
            {data.map((item) => {
              return (
                <ImageContainer
                  key={item.id}
                  style={{ backgroundImage: `url(${item.img})` }}>
                  <Overlay
                    onClick={() => {
                      router.push(`/Reviews/${item.id}`);
                    }}>
                    <OverlayHeading>{item.title}</OverlayHeading>
                    <OverlayFooter>By: {item.reviewer}</OverlayFooter>
                  </Overlay>
                </ImageContainer>
              );
            })}
            {/* <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer>

          <ImageContainer>
            <Overlay>
              <OverlayHeading>Review Name</OverlayHeading>
              <OverlayFooter>By: Amer Khanfar</OverlayFooter>
            </Overlay>
          </ImageContainer> */}
          </FlexContainer>
        ) : (
          <Audio
            height='200'
            width='200'
            color='#be7214'
            ariaLabel='audio-loading'
            wrapperStyle={{}}
            wrapperClass='wrapper-class'
            visible={true}
          />
        )}
      </PerspectiveContainer>
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 150vh;
  margin: 15rem 0rem;
  background-color: white;
  @media (max-width: 821px) {
    min-height: 100vh;
    @media (max-width: 821px) {
      margin-bottom: 5rem;
    }
  }
`;

const SectionHeading = styled.h2`
  font-size: 4rem;
  color: #be7214;
  font-weight: 700;
  text-transform: uppercase;
`;

const HeadingHr = styled.div`
  width: 7rem;
  height: 4px;
  background-color: #be7214;
  align-self: center;
`;

const SectionBody = styled.h2`
  width: 70%;
  font-size: 2rem;
  font-weight: lighter;
`;

const PerspectiveContainer = styled.div`
  perspective: 2950px;
  height: 100vh;
  width: 100%;
  overflow-x: visible;
  display: flex;
  justify-content: center;
`;

const ViewAll = styled.button`
  background-color: #be7214;
  border: none;
  color: white;
  font-size: 1.4rem;
  padding: 1.4rem 1.6rem;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  @media (max-width: 821px) {
    margin-bottom: 2rem;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 65%;
  justify-content: flex-end;
  gap: 2rem;
  transform: translate3d(-11%, -25%, 0) scale(1) rotateX(45deg) rotateY(-5deg)
    rotateZ(25deg);
  overflow-x: visible;

  @media (max-width: 821px) {
    transform: none;
    width: 90%;
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
`;

const OverlayHeading = styled.h2`
  text-align: center;
  color: white;
  font-size: 1.7rem;
`;

const OverlayFooter = styled(OverlayHeading)``;

const ImageContainer = styled.div`
  position: relative;
  width: 27%;
  box-shadow: 0px 36px 36.9px 1.1px rgba(0, 0, 0, 0.22),
    inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5),
      inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
    box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5),
      inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
    -webkit-transition: all 0.6s ease-in-out;
    -o-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
    position: relative;
    z-index: 5;
  }

  &:hover ${Overlay} {
    opacity: 1;
    transition: all 1s ease-in-out;
  }

  @media (max-width: 821px) {
    width: 47%;

    &:hover {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
      -webkit-box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5),
        inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
      box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5),
        inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
      -webkit-transition: all 0.6s ease-in-out;
      -o-transition: all 0.6s ease-in-out;
      transition: all 0.6s ease-in-out;
      position: relative;
      z-index: 5;
    }
  }
`;
