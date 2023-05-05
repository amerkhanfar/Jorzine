import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Banner = () => {
  return (
    <Container>
      <BottomBrush />
      <BannerText>
        <p style={{ color: "white" }}>JORZINE</p>
      </BannerText>
      <BannerText2>
        <p style={{ color: "white" }}>MID-EASTERN METAL WEBZINE</p>
      </BannerText2>
      <BannerText3>
        <p style={{ color: "white" }}>SERVING ROCK & METAL SINCE 2006</p>
      </BannerText3>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("/assets/bg.jpg");
  background-size: cover;
  overflow: hidden;
`;

const BottomBrush = styled.div`
  position: absolute;
  bottom: 0;
  background-image: url("/assets/brushbg.png");
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Animation1 = keyframes`
  0% {
    opacity: .5;
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
    text-shadow: 0px 0px 40px #000;
    color: transparent;
  }
  5% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  20% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  30% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    text-shadow: 0px 0px 50px #000;
    color: transparent;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);

  }
`;

const Animation2 = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
    text-shadow: 0px 0px 40px #000;
    color: transparent;
  }
  30% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  40% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  60% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    text-shadow: 0px 0px 50px #000;
    color: transparent;
  }
  100% {
    opacity: 0;
  }
`;

const Animation3 = keyframes`
 0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
    text-shadow: 0px 0px 40px #000;
    color: transparent;
  }
  60% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  70% {
    opacity: .8;
    -webkit-transform: scale(1);
            transform: scale(1);
    text-shadow: 0px 0px 0px #000;
    color: #000;
  }
  80% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    text-shadow: 0px 0px 50px #000;
    color: transparent;
  }
  100% {
    opacity: 0;
  }
`;

const BannerText = styled.div`
  font-size: 18rem;
  text-shadow: 0px 0px 1px #110006;
  color: white;
  transform: scale(1);
  animation-name: ${Animation1};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  position: absolute;
  text-align: center;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    font-size: 10rem;
  }
`;

const BannerText2 = styled.div`
  font-size: 7rem;
  text-shadow: 0px 0px 1px #110006;
  color: white;
  transform: scale(1);
  animation-name: ${Animation2};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  position: absolute;
  text-align: center;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    width: 70%;
    font-size: 6rem;
  }
`;

const BannerText3 = styled.div`
  font-size: 7rem;
  text-shadow: 0px 0px 1px #110006;
  color: white;
  transform: scale(1);
  animation-name: ${Animation3};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  position: absolute;
  text-align: center;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    width: 70%;
    font-size: 6rem;
  }
`;
