import React, { useState, useEffect } from "react";
import Navbar from "../../screens/AltNav";
import styled from "styled-components";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/news",
      ); // Replace with your API endpoint
      const jsonData = response.data.news;
      console.log(jsonData);
      setData(jsonData.slice(0, 120)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container>
      <Navbar />
      <FirstNews>
        <ImageContainer />
        <NewsBody>
          <NewsHeading>
            WINTERSUN - Posts Video Teaser For The New Album
          </NewsHeading>
          <NewsPar>
            A new video teaser has been posted online of first impressions of
            the new Wintersun album Time I, which was shot just after a
            listening session at the Nuclear Blast headquarters. Check out the
            footage below.&nbsp;Time I is scheduled for release on October 12th,
            2012 (EU) and October 19th, 2012 (North America) via Nuclear Blast
            and the track listing is as follows:&nbsp;1. When Time Fades Away2.
            Sons of Winter and Stars&nbsp;&nbsp;&nbsp; I Rain of
            Stars&nbsp;&nbsp;&nbsp; II Surrounded by Darkness&nbsp;&nbsp;&nbsp;
            III Journey Inside a Dream&nbsp;&nbsp;&nbsp; IV Sons of Winter and
            Stars3. Land of Snow and Sorrow4. Darkness and Frost5. Time\r\n\r\n
            Dont miss Wintersun live on the Heidenfest Tour 2012 with
            Korpiklaani, Varg, Trollfest, and Krampus:\r\n&nbsp;19.10. DE
            Oberhausen - Turbinenhalle20.10. DE Stuttgart - LKA Longhorn21.10.
            NL Tilburg - 01322.10. CH Pratteln - Z723.10. CH Fribourg -
            Fri-Son24.10. IT Bologna - Estragon25.10. AT Wien - Gasometer26.10.
            DE Leipzig - Hellraiser27.10. CZ Prague - KD Vltavska28.10. PL
            Krakow - Studio29.10. DE Hamburg - Markthalle30.10. DE Berlin -
            Postbahnhof31.10. DE Munich - Backstage01.11. DE Saarbr&uuml;cken -
            Garage02.11. DE Geiselwind - Music Hall03.11. DE Giessen -
            Hessenhallen04.11. BE Antwerp - Trix&nbsp;Source:
            metalunderground.com
          </NewsPar>
          <Info>
            <Author>ADMIN</Author>
            <Date>2012-08-04</Date>
          </Info>
        </NewsBody>
      </FirstNews>
      <h1 style={{ fontSize: "3.5rem" }}>Latest News</h1>
      {data.length ? (
        <CardsContainer>
          {data.map((item) => {
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

const FirstNews = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  align-items: center;
  @media (max-width: 821px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 35%;
  height: 35rem;
  border-radius: 1rem;
  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease-in-out;

  @media (max-width: 821px) {
    width: 80%;
  }
`;

const NewsBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 821px) {
    width: 100%;
    align-items: center;
  }
`;

const NewsHeading = styled.h2`
  font-size: 3rem;
  color: #be7214;
  @media (max-width: 821px) {
    text-align: center;
  }
`;

const NewsPar = styled.div`
  font-size: 1.3rem;
  @media (max-width: 821px) {
    width: 90%;
    margin: 5rem 0rem;
  }
`;

export const LatestNewsHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const LatestNewsPar = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: clip;
  max-height: 250px;
  width: 100%;
  font-size: 1.5rem;
  @media (max-width: 821px) {
    width: 90%;
    margin: 5rem 0rem;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  align-self: center;
`;
export const Author = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: #d5ad18;
  width: 50%;
`;

export const Date = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: black;
  width: 50%;
`;

export const CardsContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 821px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 22%;
  display: flex;
  max-height: 600px;
  border-radius: 1rem;
  border: 1px solid gray;
  text-align: center;
  gap: 1rem;
  padding: 0px 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 821px) {
    width: 100%;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
`;

export const ReadMore = styled.a`
  color: #d5ad18;
  font-size: 15px;
  cursor: pointer;
`;
