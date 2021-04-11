import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { CONTACT_NUMBER, CONTACT_EMAIL } from "../constants";

const Container = styled.div`
  position: relative;
  min-height: 400px;
  width: 100vw;
  @media (min-width: 750px) {
    min-height: 550px;
    text-align: center;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  div {
    max-width: 100vw !important;
    width: 100vw !important;
  }
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const BodyWrapper = styled.div`
  background: rgb(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  @media (min-width: 750px) {
    padding: 0 30px;
  }
`;
const Heading = styled.h1`
  color: white;
  margin-bottom: 10px;
  @media (min-width: 750px) {
    font-size: 50px;
  }
`;
const Para = styled.p`
  color: white;
  margin: 0 0 15px 0;
  @media (min-width: 750px) {
    font-size: 18px;
    max-width: 750px;
    margin: 0 auto 15px;
  }
`;
const Button = styled.button`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  width: 150px;
  border: none;
  border-radius: 25px;
  overflow: hidden;
  padding: 0;
  @media (min-width: 750px) {
    margin: 10px auto 0;
    width: 220px;
  }
  & > a {
    background: linear-gradient(0deg, #3fa200, #00ff08);
    color: white;
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
    padding: 10px;
    @media (min-width: 750px) {
      padding: 15px;
    }
  }
`;

const Banner = ({ img, alt, title, desc }) => {
  const image = getImage(img);
  const sendMail = (e) => {
    fetch("https://real-value-sendmail-api.herokuapp.com/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: "Someone Clicked on call now button on real value website.",
        text: "Someone clicked on call now button on real value website.",
        toEmails: [CONTACT_EMAIL]
      })
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <ImageWrapper>
        <GatsbyImage image={image} alt={alt} style={{ height: "100%" }} />
      </ImageWrapper>
      <Body>
        <BodyWrapper>
          <Heading>{title}</Heading>
          <Para>{desc}</Para>
          <Button onClick={sendMail}>
            <a href={`tel:${CONTACT_NUMBER}`}>call now</a>
          </Button>
        </BodyWrapper>
      </Body>
    </Container>
  );
};

export default Banner;
