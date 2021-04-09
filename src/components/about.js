import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 20px 10px;
  @media (min-width: 750px) {
    display: flex;
    align-items: center;
    padding: 80px 10px;
  }
`;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 0;
  flex: 1;
`;
const Text = styled.p`
  line-height: 24px;
  flex: 2;
  margin: auto;
  @media (min-width: 750px) {
    padding: 0 50px;
  }
`;

const About = () => {
  return (
    <>
      <Section>
        <SectionHeading id="about">About Real Value Properties</SectionHeading>
        <Text>
          We are enthusiastic to settle anything in connection with an entrusted real estate. Our team is committed in providing solutions related to
          real estate.
        </Text>
      </Section>
    </>
  );
};

export default About;
