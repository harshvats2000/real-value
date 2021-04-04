import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 20px 10px;
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
`;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 0;
`;
const Text = styled.p`
  line-height: 24px;
`;

const About = () => {
  return (
    <>
      <Section>
        <SectionHeading>About Real Value</SectionHeading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis placeat, iure officiis quam omnis iusto laboriosam quisquam nam quo
          qui, nisi sit unde atque, inventore quidem dolores aliquid aliquam magni nesciunt quaerat dicta ullam sed? Modi quam blanditiis, sed
          distinctio, maxime iusto alias illum numquam aperiam impedit quisquam totam.
        </Text>
      </Section>
    </>
  );
};

export default About;
