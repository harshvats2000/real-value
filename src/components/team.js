import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Section = styled.section`
  padding: 20px 0;
`;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 0;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
  display: flex;
  overflow-x: scroll;
`;
const ListItem = styled.li`
  padding: 10px;
`;
const ImageWrapper = styled.div`
  & > div {
    border-radius: 10px;
  }
`;
const Body = styled.div``;
const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 0;
`;

const Team = () => {
  return (
    <Section>
      <SectionHeading id="team">Our Team</SectionHeading>

      <List>
        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/kakkar.jpeg" alt="girish kakkar" placeholder="blurred" layout="fixed" width={250} height={250} />
          </ImageWrapper>

          <Body>
            <Name>Girish Kakkar</Name>
          </Body>
        </ListItem>

        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/vishal.jpeg" alt="vishal bharadwaj" placeholder="blurred" layout="fixed" width={250} height={250} />
          </ImageWrapper>

          <Body>
            <Name>Vishal Bharadwaj</Name>
          </Body>
        </ListItem>

        <ListItem>
          <ImageWrapper>
            <StaticImage src="https://via.placeholder.com/250.jpeg" alt="Nitin Gard" placeholder="blurred" layout="fixed" width={250} height={250} />
          </ImageWrapper>

          <Body>
            <Name>Nitin Garg</Name>
          </Body>
        </ListItem>
      </List>
    </Section>
  );
};

export default Team;
