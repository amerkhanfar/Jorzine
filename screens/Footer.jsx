import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <SubContainer>
        {/* <LeftFooter>
          <Logo src='/assets/logo.png' alt='Jorzine Logo' />
          <p style={{ fontSize: "15px", color: "grey" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            minima dignissimos sit ex maiores non quia ipsa eligendi suscipit
            enim.
          </p>
        </LeftFooter>

        <div>ammememememememmememememememmememe</div> */}
      </SubContainer>
    </Container>
  );
};

export default Footer;

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url("/assets/footer-bg.jpg");
  background-size: cover;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;
  color: white;
`;

const LeftFooter = styled.div`
  width: 50%;
`;

const Logo = styled.img`
  @media screen and (max-width: 821px) {
    width: 40%;
  }
`;
