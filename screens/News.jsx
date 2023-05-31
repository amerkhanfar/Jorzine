import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/news_international",
      ); // Replace with your API endpoint
      const jsonData = response.data.news;
      console.log(jsonData);
      setData(jsonData.slice(0, 6)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SectionHeading>International News</SectionHeading>
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
              <FullButton>READ MORE</FullButton>
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
              <FullButton>READ MORE</FullButton>
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
              <FullButton>READ MORE</FullButton>
            </div>
          </OneContainer>

          <FullButton>VIEW ALL NEWS</FullButton>
        </NewsContainer>
      </Fade>
      {/* <BottomAbs>
        <Bottom>
          <Shade />
        </Bottom>
      </BottomAbs> */}
    </Container>
  );
};

export default News;

const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow: hidden;
  gap: 5rem;
  background-image: url("/assets/bottom.png");
  background-size: cover;
  min-height: 170vh;
  background-position: center;
  overflow: visible;
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
    width: 93%;
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
  background: #be7214;
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

const BottomAbs = styled.div`
  width: 30%;
  height: 30%;
  position: absolute;
  bottom: -150px;
`;

const Bottom = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("/assets/record.png");
`;

const Shade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("/assets/record-shade.png");
`;
