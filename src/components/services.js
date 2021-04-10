import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { SERVICES } from "../constants";

const Section = styled.section`
  padding: 20px;
`;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  @media (min-width: 750px) {
    font-size: 40px;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  @media (min-width: 750px) {
    display: flex;
  }
`;
const ListItem = styled.li`
  padding: 20px 10px;
  flex: 1;
  border-radius: 10px;
  transition: 0.5s !important;
  @media (min-width: 750px) {
    img {
      transition: 0.5s !important;
      filter: grayscale(1) brightness(0.5) !important;
    }
    &:hover {
      transform: scale(1.03) translateY(-10px) !important;
      img {
        filter: grayscale(0) brightness(1) !important;
      }
    }
  }
`;
const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  max-height: 280px;
`;
const ReadyToMoveIn = styled.p`
  margin: 6px 0 0 0;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.8);
`;
const Heading = styled.h3`
  margin: 5px 0;
  font-size: 25px;
`;
const Para = styled.p`
  color: rgb(0, 0, 0, 0.7);
  line-height: 24px;
`;
const ViewMore = styled.button`
  padding: 0;
  border: none;
  a {
    background: ${(props) => props.theme.secondary};
    border-radius: 4px;
    color: white;
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
  }
`;

const Services = () => {
  return (
    <Section>
      <SectionHeading id="services">Our Services</SectionHeading>
      <List>
        <ListItem data-aos="fade-up">
          <ImageWrapper>
            <StaticImage src="../images/4-builder.png" alt="Builder floors" placeholder="blurred" />
          </ImageWrapper>
          <ReadyToMoveIn>Ready to move in</ReadyToMoveIn>
          <Heading>Builder floors in Faridabad</Heading>
          <Para>{SERVICES[0].desc}</Para>
          <ViewMore>
            <Link to="builder-floors">View More</Link>
          </ViewMore>
        </ListItem>

        <ListItem data-aos="fade-up">
          <ImageWrapper>
            <StaticImage src="../images/affordable.jpg" alt="Affordable housing" placeholder="blurred" />
          </ImageWrapper>
          <ReadyToMoveIn>Ready to move in</ReadyToMoveIn>
          <Heading>Affordable housing in Faridabad</Heading>
          <Para>{SERVICES[1].desc}</Para>
          <ViewMore>
            <Link to="affordable-housing">View More</Link>
          </ViewMore>
        </ListItem>

        <ListItem data-aos="fade-up">
          <ImageWrapper>
            <StaticImage src="../images/flats.jpeg" alt="Flats" placeholder="blurred" />
          </ImageWrapper>
          <ReadyToMoveIn>Ready to move in</ReadyToMoveIn>
          <Heading>Flats in Faridabad</Heading>
          <Para>{SERVICES[2].desc}</Para>
          <ViewMore>
            <Link to="flats">View More</Link>
          </ViewMore>
        </ListItem>

        <ListItem data-aos="fade-up">
          <ImageWrapper>
            <StaticImage src="../images/villas.jpeg" alt="Villas" placeholder="blurred" />
          </ImageWrapper>
          <ReadyToMoveIn>Ready to move in</ReadyToMoveIn>
          <Heading>Villas/Plots and commercial Shops/SCO'S</Heading>
          <Para>{SERVICES[3].desc}</Para>
          <ViewMore>
            <Link to="commercials">View More</Link>
          </ViewMore>
        </ListItem>
      </List>
    </Section>
  );
};

export default Services;
