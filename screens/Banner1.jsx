import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Fade } from "react-reveal";
import axios from "axios";
import { useRouter } from "next/router";
import { Audio } from "react-loader-spinner";
const Banners = () => {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetchData();
    fetchReviews();
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/interviews",
      ); // Replace with your API endpoint
      const jsonData = response.data.interviews;
      console.log(jsonData);
      setInterviews(jsonData.slice(0, 4)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/news_international",
      ); // Replace with your API endpoint
      const jsonData = response.data.news;
      console.log(jsonData.reverse());
      setNews(jsonData.slice(0, 3)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        "https://jorzine-backend.oplus.dev/api/reviews",
      ); // Replace with your API endpoint
      const jsonData = response.data.reviews;
      console.log(jsonData);
      setReviews(jsonData.slice(0, 4)); // Get the first three items from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Fade>
      <Container>
        <Overlay />
        <BottomBrush />

        <Rows>
          <Column
            style={{
              width: "20vw",
              height: "60vh",
              maxHeight: "100vh",
            }}>
            {/* <Fade left>
              <div
                style={{
                  alignSelf: "flex-start",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}>
                <Headline>MID-EASTERN METAL WEBZINE</Headline>

                <Headline>SERVING ROCK & METAL SINCE 2006</Headline>

                {news.length ? (
                  <div
                    style={{
                      height: "70%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}>
                    <h1 style={{ color: "white" }}>Latest News</h1>
                    {news.map((item) => {
                      return (
                        <div
                          key={item.id}
                          style={{
                            height: "100%",
                          }}>
                          <h2 style={{ color: "white" }}>{item.title}</h2>
                          <h3
                            onClick={() => {
                              router.push(`/news/${item.id}`);
                            }}
                            style={{
                              color: "white",
                              cursor: "pointer",
                            }}>
                            {" "}
                            Read More →
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    style={{
                      height: "70%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}>
                    <h1 style={{ color: "white" }}>Latest News</h1>{" "}
                    <Audio
                      height='100'
                      width='100'
                      color='#be7214'
                      ariaLabel='audio-loading'
                      wrapperStyle={{}}
                      wrapperClass='wrapper-class'
                      visible={true}
                    />
                  </div>
                )}
              </div>
            </Fade> */}

            <Playlist
              src='https://open.spotify.com/embed/playlist/6GIfItyTdvjxKVVxkqfVpc?utm_source=generator&theme=0'
              allowfullscreen=''
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'></Playlist>
          </Column>

          {interviews.length ? (
            <Column>
              <h1 style={{ color: "white" }}>Latest Interviews</h1>
              {interviews.map((item) => {
                return (
                  <New key={item.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <Thumb
                        style={{
                          backgroundImage: `url(${item.thumb})`,

                          backgroundSize: "cover",
                        }}></Thumb>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "60%",
                        }}>
                        <p
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.3rem",
                          }}>
                          {item.title}
                        </p>
                        <p
                          style={{
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={() => {
                            router.push(`/interviews/${item.id}`);
                          }}>
                          {" "}
                          Read More →
                        </p>
                      </div>
                    </div>
                  </New>
                );
              })}
            </Column>
          ) : (
            <Column>
              {" "}
              <h1 style={{ color: "white" }}>Latest Interviews</h1>{" "}
              <Audio
                height='100'
                width='100'
                color='#be7214'
                ariaLabel='audio-loading'
                wrapperStyle={{}}
                wrapperClass='wrapper-class'
                visible={true}
              />
            </Column>
          )}

          {reviews.length ? (
            <Column>
              <h1 style={{ color: "white" }}>Latest Reviews</h1>
              {reviews.map((item) => {
                return (
                  <New key={item.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <Thumb
                        style={{
                          backgroundImage: `url(${item.thumb})`,

                          backgroundSize: "cover",
                        }}></Thumb>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "60%",
                        }}>
                        <p
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.3rem",
                          }}>
                          {item.title}
                        </p>
                        <p
                          style={{
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={() => {
                            router.push(`/Reviews/${item.id}`);
                          }}>
                          {" "}
                          Read More →
                        </p>
                      </div>
                    </div>
                  </New>
                );
              })}
            </Column>
          ) : (
            <Column>
              {" "}
              <h1 style={{ color: "white" }}>Latest Reviews</h1>{" "}
              <Audio
                height='100'
                width='100'
                color='#be7214'
                ariaLabel='audio-loading'
                wrapperStyle={{}}
                wrapperClass='wrapper-class'
                visible={true}
              />
            </Column>
          )}
        </Rows>
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
    </Fade>
  );
};

export default Banners;

const Rows = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 2;
  @media (max-width: 821px) {
    flex-direction: column;
    width: 90%;
    display: none;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 1;
  @media (max-width: 821px) {
    flex-direction: column;
    width: 90%;
    display: none;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 60vh;
  max-height: 60vh;

  width: 20vw;

  @media (max-width: 821px) {
    flex-direction: row;
    width: 90%;
  }
`;

const New = styled.div`
  height: 27%;
  min-height: 27%;
  max-height: 27%;
  min-width: 100%;
  border-bottom: 1px solid white;
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("/assets/bg.jpg");
  background-size: cover;
  overflow: hidden;
`;

const Playlist = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
  color: #be7214;
  margin-top: 1rem;
  border-radius: 10px;
  @media (max-width: 821px) {
    width: 90%;
    height: 85rem;
  }
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

const Headline = styled.h1`
  color: white;
  font-size: 20px;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 18px;
    white-space: pre-line;
  }
`;

const Thumb = styled.div`
  width: 10rem;
  height: 10rem;
  @media (max-width: 1000px) {
    width: 8.5rem;
    height: 8.5rem;
  }
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
  display: none;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    display: block;
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
  display: none;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    display: block;
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
  display: none;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 821px) {
    top: 35rem;
    display: block;
    width: 70%;
    font-size: 6rem;
  }
`;
