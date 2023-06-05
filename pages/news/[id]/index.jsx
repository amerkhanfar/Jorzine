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
} from "../index";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jorzine-backend.oplus.dev/api/news/${id}`,
      ); // Replace with your API endpoint
      const jsonData = response.data.new;
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
    <Container className='bg-white'>
      <Navbar />

      <NewsHeading>{data.title}</NewsHeading>
      <NewsBody>{data.body}</NewsBody>
      <NewsHeading>Related News</NewsHeading>

      <CardsContainer style={{ marginBottom: "50px", zIndex: 2 }}>
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

// export async function getStaticProps() {
//   return {
//     props: { title: "title", description: "description" },
//   };
// }

// export async function getStaticPaths() {
//   const ids = [17, 20, 21]; // Example array of IDs

//   // Map the IDs to the `params` object required by Next.js
//   const paths = ids.map((id) => ({
//     params: { id: id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow-x: hidden;
  gap: 50px;
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
  position: relative;
  font-size: 2rem;
  font-weight: 300;
  width: 70%;
  @media (max-width: 821px) {
    width: 90%;
    text-align: center;
  }
`;
