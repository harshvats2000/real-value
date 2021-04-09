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

const List = styled.ul``;
const ListItem = styled.li``;
const ImageWrapper = styled.div``;

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "4-builder.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "builder-floors" } } }) {
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
          title="Builder Floors in Faridabad | Real Value"
          description="Buy best properties like builder floors, flats, affordable housing, and villas in greater faridabad (Neharpar) from genuine buyers."
        />
        <Header />
        <main>
          <Banner title={SERVICES[0].heading} desc={SERVICES[0].desc} img={img} alt={SERVICES[0].heading} />
          <Contact />
          <List>
            {list.map((l, i) => {
              const { name, image, slug, category } = l.node.frontmatter;
              return (
                <ListItem key={i}>
                  <ImageWrapper>
                    <GatsbyImage image={getImage(image)} alt={name} />
                  </ImageWrapper>
                  <p>{name}</p>
                  <Link to={`/category/${slug}`}>View More</Link>
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
