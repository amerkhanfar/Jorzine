import React, { useState, useEffect } from "react";
import Navbar from "../../screens/AltNav";
import Footer from "../../screens/Footer";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import { Audio } from "react-loader-spinner";

const Index = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/interviews",
      ); // Replace with your API endpoint
      const jsonData = response.data.interviews;
      console.log(jsonData);
      setData(jsonData.slice(0, 120)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container>
      <Navbar />
      {data.length ? (
        <ArticlesContainer>
          {data.map((item) => {
            return (
              <ArticleContainer key={item.id}>
                <ImageContainer
                  style={{ backgroundImage: `url(${item.thumb})` }}
                />
                <div style={{ width: "50%" }}>
                  <h1>{item.title}</h1>
                  <h2>Interviewer: &nbsp;{item.interviewer}</h2>
                  <h2>Date: &nbsp;{item.interview_date}</h2>
                  <ViewAll
                    onClick={() => {
                      router.push(`/interviews/${item.id}`);
                    }}>
                    VIEW INTERVIEW
                  </ViewAll>
                </div>
              </ArticleContainer>
            );
          })}
        </ArticlesContainer>
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

const ViewAll = styled.button`
  background-color: #be7214;
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 1.2rem 1.2rem;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const TwoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const ArticlesContainer = styled.div`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  @media (max-width: 821px) {
    flex-direction: column;
    width: 90%;
  }
`;

const ArticleContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 821px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  height: 25rem;
  border-radius: 1rem;
  background-image: url("/assets/600x600.png");
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease-in-out;
`;
