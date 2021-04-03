import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  padding: 10px;
`;
const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const Heading = styled.h3`
  margin: 0 0 5px 0;
  font-size: 25px;
`;
const Para = styled.p`
  margin: 0 0 10px 0;
  color: rgb(0, 0, 0, 0.8);
`;

const Services = () => {
  return (
    <>
      <SectionHeading>Our Services</SectionHeading>
      <List>
        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/4-builder.png" alt="Builder floors" placeholder="blurred" />
          </ImageWrapper>
          <Heading>Builder floors</Heading>
          <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit consectetur ut labore quod eligendi.</Para>
        </ListItem>

        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/affordable.jpg" alt="Affordable housing" placeholder="blurred" />
          </ImageWrapper>
          <Heading>Affordable housing</Heading>
          <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit consectetur ut labore quod eligendi.</Para>
        </ListItem>

        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/flats.jpeg" alt="Flats" placeholder="blurred" />
          </ImageWrapper>
          <Heading>Flats</Heading>
          <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit consectetur ut labore quod eligendi.</Para>
        </ListItem>
      </List>
    </>
  );
};

export default Services;
