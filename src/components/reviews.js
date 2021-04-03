import React from "react";
import styled from "styled-components";

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

const Container = styled.div``;

const Heading = styled.h3`
  text-align: center;
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
  @media (max-width: 750px) {
    margin: 10px;
  }
`;

const Name = styled.div`
  text-transform: capitalize;
`;
const Text = styled.p``;

const Reviews = () => {
  return (
    <>
      <Container>
        <Heading>What customers say about Real Value?</Heading>
        <List>
          {reviews.map((review, i) => (
            <ListItem>
              <Text>{review.text}</Text>
              <Name>- {review.name}</Name>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Reviews;
