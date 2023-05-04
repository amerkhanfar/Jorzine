import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const MeNews = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SectionHeading>Middle Eastren News</SectionHeading>
        <HeadingHr />
      </div>
      <Fade bottom>
        <NewsContainer>
          <OneContainer>
            <NewsBody>
              <NewsHeading>INTERNATIONAL CONFERENCE IN 2018</NewsHeading>
              <NewsPar>
                There are many variations of passages of Lorem Ipsum available
                There are many variations of passages of Lorem Ipsum available.
              </NewsPar>
            </NewsBody>
            <div>
              <FullButton>VIEW FULL NEWS</FullButton>
            </div>
          </OneContainer>

          <OneContainer>
            <NewsBody>
              <NewsHeading>INTERNATIONAL CONFERENCE IN 2018</NewsHeading>
              <NewsPar>
                There are many variations of passages of Lorem Ipsum available
                There are many variations of passages of Lorem Ipsum available.
              </NewsPar>
            </NewsBody>
            <div>
              <FullButton>VIEW FULL NEWS</FullButton>
            </div>
          </OneContainer>

          <OneContainer>
            <NewsBody>
              <NewsHeading>INTERNATIONAL CONFERENCE IN 2018</NewsHeading>
              <NewsPar>
                There are many variations of passages of Lorem Ipsum available
                There are many variations of passages of Lorem Ipsum available.
                There are many variations of passages of Lorem Ipsum available
                There are many variations of passages of Lorem Ipsum available.
              </NewsPar>
            </NewsBody>
            <div>
              <FullButton>VIEW FULL NEWS</FullButton>
            </div>
          </OneContainer>

          <FullButton>VIEW ALL NEWS</FullButton>

          {/* <BottomBrush /> */}
        </NewsContainer>
        {/* <Bottom src='/assets/bottom.png' alt='' /> */}
      </Fade>
    </Container>
  );
};

export default MeNews;

const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 5rem;
  background-image: url("/assets/top.png");
  background-size: cover;
  min-height: 150vh;
  background-position: center;
  padding-top: 25rem;
  padding-bottom: 8rem;
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

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

const OneContainer = styled.div`
  width: 70%;
  min-width: 70%;
  max-width: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 5rem;
  @media (max-width: 821px) {
    min-width: 93%;
    max-width: 93%;
    flex-direction: column;

    text-align: center;
  }
`;

const NewsBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 821px) {
    width: 100%;
    align-items: center;
  }
`;

const NewsHeading = styled.h2`
  font-size: 2rem;
`;

const NewsPar = styled.div`
  width: 70%;
  font-size: 1.6rem;
  @media (max-width: 821px) {
    width: 90%;
    margin: 5rem 0rem;
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

const BottomBrush = styled.div`
  width: 100vw;
  height: 120vh;
  z-index: 3;
  background: white;
  background-image: url("/assets/bottom.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Bottom = styled.img`
  width: 100%;
  height: 100%;
`;