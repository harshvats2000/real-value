import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { contact_number, contact_email } from "../constants";

const Container = styled.div`
  position: relative;
  min-height: 400px;
  width: 100vw;
  @media (min-width: 750px) {
    min-height: 500px;
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
  }
`;
const Button = styled.button`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  background: transparent;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  width: 150px;
  border: none;
  @media (min-width: 750px) {
    margin: 10px auto 0;
    width: 220px;
  }
  & > a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
    width: 100%;
    padding: 10px;
    ${(props) => css`
      border: 2px solid ${props.theme.primary};
      color: ${props.theme.primary};
    `};
    @media (min-width: 750px) {
      padding: 15px;
    }
  }
`;

const Banner = () => {
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
        toEmails: [contact_email]
      })
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <ImageWrapper>
        <StaticImage
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          placeholder="blurred"
          alt="image"
          style={{ height: "100%" }}
        />
      </ImageWrapper>
      <Body>
        <BodyWrapper>
          <Heading>Dream Homes in Faridabad</Heading>
          <Para>Buy best property: Builder Floors | Flats | Villas | Plots/SCO's in Faridabad.</Para>
          <Button onClick={sendMail}>
            <a href={`tel:${contact_number}`}>call now</a>
          </Button>
        </BodyWrapper>
      </Body>
    </Container>
  );
};

export default Banner;
