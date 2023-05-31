import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../../screens/AltNav";
import Footer from "../../../screens/Footer";
import {
  CardsContainer,
  Card,
  Info,
  InfoContainer,
  Author,
  LatestNewsPar,
  LatestNewsHeading,
  ReadMore,
  Date,
} from "../../news/index";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jorzine-backend.oplus.dev/api/interviews/${id}`,
      ); // Replace with your API endpoint
      const jsonData = response.data.interview;
      console.log(jsonData);
      setData(jsonData); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/news",
      ); // Replace with your API endpoint
      const jsonData = response.data.news;
      console.log(jsonData);
      setNews(jsonData.slice(0, 4)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchNews();
  }, [id]);

  return (
    <Container>
      <Navbar />
      {/* <ImageContainer style={{ backgroundImage: `url(${data.thumb})` }} /> */}
      <NewsHeading>{data.title}</NewsHeading>
      <HeadingHr />
      <Infos>
        <h2>Interviewer:&nbsp; {data.interviewer}</h2>
        <h2>Band/Artist:&nbsp; {data.band}</h2>
        <h2>Interview Date:&nbsp; {data.interview_date}</h2>
      </Infos>
      <NewsBody>{data.body}</NewsBody>
      <NewsHeading>Latest News</NewsHeading>
      <CardsContainer style={{ marginBottom: "50px" }}>
        {news.map((item) => {
          return (
            <Card key={item.id}>
              {/* <CardImage /> */}
              <LatestNewsHeading>{item.title}</LatestNewsHeading>
              <LatestNewsPar>{item.body}</LatestNewsPar>
              <InfoContainer>
                <Info>
                  <Author>By: {item.posted_by_user}</Author>
                  <Date>{item.news_date}</Date>
                </Info>
              </InfoContainer>
              <ReadMore
                onClick={() => {
                  router.push(`/news/${item.id}`);
                }}>
                Read More →
              </ReadMore>
            </Card>
          );
        })}
      </CardsContainer>
      <Footer />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow-x: hidden;
  gap: 50px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 40rem;
  border-radius: 1rem;
  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease-in-out;

  @media (max-width: 821px) {
    width: 80%;
  }
`;

const HeadingHr = styled.div`
  width: 7rem;
  height: 4px;
  background-color: #be7214;
  align-self: center;
`;

const NewsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const NewsHeading = styled.h1`
  color: #be7214;
  font-size: 3rem;
  @media (max-width: 821px) {
    width: 90%;
    text-align: center;
  }
`;

const NewsBody = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  width: 70%;
  @media (max-width: 821px) {
    width: 90%;
    text-align: center;
  }
`;

const Infos = styled.div`
  display: flex;

  width: 50%;
  justify-content: space-between;
  align-self: center;
  @media (max-width: 821px) {
    flex-direction: column;
    width: 90%;
  }
`;
