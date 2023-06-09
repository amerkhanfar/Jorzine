import React from "react";
import styled from "styled-components";
import { AiOutlinePlaySquare } from "react-icons/ai";
import Link from "next/link";

const Featured = () => {
  return (
    <Container>
      <SubContainer>
        <TextContainer>
          <SectionHeading>Featured Songs</SectionHeading>
          <HeadingHr />
        </TextContainer>
        <VideoContainer>
          <Video
            src='https://open.spotify.com/embed/artist/1id7fKgL1T5sh5MMBeviJe?utm_source=generator&theme=0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></Video>

          {/* <SongList>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
            <Song>
              <div>BILOCATE - The Dead Sea</div>
              <Link href='/#amer'>
                <AiOutlinePlaySquare fontSize={"30px"} />
              </Link>
            </Song>
          </SongList> */}
        </VideoContainer>
      </SubContainer>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/wideline.png");
  background-size: cover;
  background-position: center;
  @media (max-width: 821px) {
    background: white;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  height: 60%;
  width: 70%;
  @media (max-width: 821px) {
    height: 90%;
    width: 100%;
  }
`;

const SectionHeading = styled.h2`
  font-size: 4rem;
  color: #be7214;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const HeadingHr = styled.div`
  width: 7rem;
  height: 4px;
  background-color: #be7214;
  align-self: center;
`;

const TextContainer = styled.div`
  width: 40%;
  height: 10rem;

  @media (max-width: 821px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100rem;
  justify-content: space-between;

  @media (max-width: 821px) {
    height: 80vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 50rem;
  border: none;
  color: #be7214;
  overflow: hidden;

  border-radius: 10px;
  @media (max-width: 821px) {
    width: 90%;
    height: 85rem;
  }
`;

const SongList = styled.div`
  height: 40rem;
  width: 40%;
  background-color: white;
  color: #be7214;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 36px 36.9px 1.1px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  @media (max-width: 821px) {
    width: 100%;
  }
`;

const Song = styled.div`
  width: 90%;
  min-height: 70px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #be7214;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;
