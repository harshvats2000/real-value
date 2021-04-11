import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  max-width: 1000px;
  margin: auto;
`;
export const ListItem = styled.li`
  padding: 15px;
  width: 300px;
  height: 420px;
  list-style: none;
  transition: 0.5s;
  @media (min-width: 750px) {
    img {
      transition: 0.5s !important;
      filter: grayscale(1) brightness(0.8) !important;
    }
    &:hover {
      transform: scale(1.03) translateY(-10px) !important;
      img {
        filter: grayscale(0) brightness(1) !important;
      }
    }
  }
  @media (max-width: 750px) {
    margin: auto;
    margin-bottom: 15px;
  }
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  img {
    border-radius: 10px !important;
  }
`;
export const Name = styled.h3`
  font-size: 25px;
  margin-top: 0;
`;
export const ViewMore = styled.button`
  padding: 0;
  border: none;
  a {
    background: linear-gradient(0deg, #3fa200, #00ff08);
    color: white;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
  }
`;
