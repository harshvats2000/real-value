import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { contact_number } from "../constants";

const Container = styled.div`
  position: relative;
  min-height: 350px;
`;
const ImageWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;
const Body = styled.div`
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
`;
const Heading = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Para = styled.p`
  color: white;
  margin: 0 0 15px 0;
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background: transparent;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  ${(props) => css`
    border: 2px solid ${props.theme.primary};
    color: ${props.theme.primary};
  `};
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const Banner = () => {
  const sendMail = (e) => {
    fetch("./netlify/functions/send-email", {
      method: "POST"
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
          <Heading>
            Dream Homes in <span> Faridabad</span>
          </Heading>
          <Para>Buy best property like builder floors, flats, villas in Faridabad at affordable rates.</Para>
          <Button onClick={sendMail}>
            <a href={`tel:${contact_number}`}>call now</a>
          </Button>
        </BodyWrapper>
      </Body>
    </Container>
  );
};

export default Banner;
