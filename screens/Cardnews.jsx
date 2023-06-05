import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { useRouter } from "next/router";
import { Audio } from "react-loader-spinner";

const Cardnews = () => {
  const router = useRouter();
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
      {data.length ? (
        <NewsContainer>
          <Fade bottom>
            <CardContainer>
              {data.map((item) => {
                return (
                  <Card key={item.id}>
                    <NewsBody>
                      <NewsHeading>{item.title}</NewsHeading>
                      <NewsPar>{item.body}</NewsPar>
                      <CardButton
                        onClick={() => {
                          router.push(`/news/${item.id}`);
                        }}>
                        READ MORE
                      </CardButton>
                    </NewsBody>
                  </Card>
                );
              })}
            </CardContainer>
            <FullButton
              onClick={() => {
                router.push(`/news`);
              }}>
              VIEW ALL NEWS
            </FullButton>
          </Fade>
        </NewsContainer>
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

      {/* <BottomAbs>
        <Bottom>
          <Shade />
        </Bottom>
      </BottomAbs> */}
    </Container>
  );
};

export default Cardnews;

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
  min-height: 190vh;
  background-position: center;
  overflow: visible;

  @media (max-width: 821px) {
    padding-bottom: 70vh;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10rem;
  flex-wrap: wrap;

  @media (max-width: 821px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 1rem;
  width: 27%;

  max-height: 50vh;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  @media (max-width: 821px) {
    width: 90%;
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

const NewsContainer = styled.div`
  position: relative;
  width: 70%;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  @media (max-width: 821px) {
    width: 100%;
    align-items: center;
    height: 100%;
  }
`;

const NewsHeading = styled.h2`
  font-size: 1.6rem;
  color: white;

  @media (max-width: 821px) {
    font-size: 2.5rem;
  }
`;

const NewsPar = styled.div`
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: clip;
  overflow: hidden;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9; /* start showing ellipsis when 3rd line is reached */

  color: white;
  @media (max-width: 821px) {
    font-size: 1.8rem;
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

const CardButton = styled.button`
  cursor: pointer;
  background: #be7214;
  color: white;
  border: transparent;
  padding: 0.7rem 1.7rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  height: 3rem;
  border-radius: 4px;
  align-self: center;
  margin: 1rem 0rem;
  @media (max-width: 821px) {
    font-size: 1.8rem;
    height: fit-content;
  }
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
