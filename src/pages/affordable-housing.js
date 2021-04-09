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
  padding: 0;
`;
const ListItem = styled.li`
  padding: 15px;
  min-width: 300px;
  flex: 33.33%;
  list-style: none;
  text-align: center;
  @media (max-width: 750px) {
    margin-bottom: 15px;
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
  margin: 10px 0;
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
                  gatsbyImageData(placeholder: BLURRED, width: 300)
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
        <Helmet
          title="Affordable Housing in Faridabad | Real Value"
          description="Buy best properties like builder floors, flats, affordable housing, and villas in greater faridabad (Neharpar) from genuine buyers."
        />
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
                  <Link to={`/${category}/${slug}`}>View More</Link>
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
