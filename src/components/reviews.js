import React from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const reviews = [
  {
    name: "harsh",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta iure dolorem alias explicabo! Officia minus nihil iste tempora. Dolores labore ipsum quo dolore. Veritatis ratione architecto non fugit beatae!`,
    rating: 5
  },
  {
    name: "dushyant",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta iure dolorem alias explicabo! Officia minus nihil iste tempora. Dolores labore ipsum quo dolore. Veritatis ratione architecto non fugit beatae!`,
    rating: 5
  },
  {
    name: "guru dutt",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta iure dolorem alias explicabo! Officia minus nihil iste tempora. Dolores labore ipsum quo dolore. Veritatis ratione architecto non fugit beatae!`,
    rating: 5
  }
];

const Section = styled.section`
  padding: 20px 0;
`;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 0;
`;

const List = styled.div`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
  border-radius: 8px;
  background: gainsboro;
  color: white;
  @media (max-width: 750px) {
    margin: 10px;
  }
  ${(props) =>
    props.item == 1 &&
    css`
      background-image: radial-gradient(
        circle 465px at -15.1% -25%,
        rgba(17, 130, 193, 1) 0%,
        rgba(67, 166, 238, 1) 49%,
        rgba(126, 203, 244, 1) 90.2%
      );
    `}
  ${(props) =>
    props.item == 2 &&
    css`
      background-image: radial-gradient(circle 939px at 94.7% 50%, rgba(0, 178, 169, 1) 0%, rgba(0, 106, 101, 1) 76.9%);
    `}
  ${(props) =>
    props.item == 3 &&
    css`
      background-image: radial-gradient(circle farthest-corner at 47.4% 55%, rgba(218, 61, 61, 1) 0%, rgba(170, 13, 71, 0.81) 90%);
    `}
`;

const Stars = styled.div`
  display: flex;
`;

const Name = styled.div`
  text-transform: capitalize;
`;
const Text = styled.p``;

const Reviews = () => {
  return (
    <>
      <Section>
        <SectionHeading>What customers say about Real Value?</SectionHeading>
        <List>
          {reviews.map((review, i) => (
            <ListItem data-aos="fade-in" item={i + 1}>
              <Stars>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StaticImage src="../images/star.svg" alt="star" layout="fixed" placeholder="tracedSVG" width={30} height={30} />
                ))}
              </Stars>
              <Text>{review.text}</Text>
              <Name>- {review.name}</Name>
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};

export default Reviews;
