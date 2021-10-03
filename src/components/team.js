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
  justify-content: center;
  @media (min-width: 750px) {
    max-width: 820px;
    margin: auto;
  }
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
const Number = styled.p`
  font-size: 20px;
`;

const Team = () => {
  return (
    <Section>
      <SectionHeading id="team">Person Behind Real Value Properties</SectionHeading>

      <List>
        <ListItem>
          <ImageWrapper>
            <StaticImage src="../images/nitin.jpeg" alt="Nitin Garg" placeholder="blurred" layout="fixed" width={250} height={250} />
          </ImageWrapper>

          <Body>
            <Name>Nitin Garg</Name>
            <Number>9811154523</Number>
          </Body>
        </ListItem>
      </List>
    </Section>
  );
};

export default Team;
