import * as React from "react";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useStaticQuery, graphql, Link } from "gatsby";
import { SERVICES } from "../constants";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  max-width: 1000px;
  margin: auto;
`;
const ListItem = styled.li`
  padding: 15px;
  width: 300px;
  height: 420px;
  margin: auto;
  list-style: none;
  transition: 0.5s;
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
  overflow: hidden;
  img {
    border-radius: 10px !important;
  }
`;
const Name = styled.h3`
  font-size: 25px;
  margin-top: 0;
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

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "affordable.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "affordable-housing" } } }) {
        edges {
          node {
            frontmatter {
              name
              slug
              category
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 300, height: 300)
                }
              }
            }
          }
        }
      }
    }
  `);
  const img = data.file;

  const list = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout>
        <Helmet>
          <title>Affordable Housing in Faridabad | Real Value</title>
          <meta
            name="description"
            content="Buy affordable housing in greater faridabad (Neharpar), sec-85, sec-86 from genuine buyers like Real Value."
          />
        </Helmet>
        <Header />
        <main>
          <Banner title={SERVICES[1].heading} desc={SERVICES[1].desc} img={img} alt={SERVICES[1].heading} />
          <Contact />
          <List>
            {list.map((l, i) => {
              const { name, image, slug, category } = l.node.frontmatter;
              return (
                <ListItem key={i}>
                  <ImageWrapper>
                    <GatsbyImage image={getImage(image)} alt={name} />
                  </ImageWrapper>
                  <Name>{name}</Name>
                  <ViewMore>
                    <Link to={`/${category}/${slug}`}>View More</Link>
                  </ViewMore>
                </ListItem>
              );
            })}
          </List>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
