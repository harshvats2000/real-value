import * as React from "react";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import { SERVICES } from "../constants";
import CategoriesPage from "../components/categoriesPage";

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "villas.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "commercials" } } }) {
        edges {
          node {
            excerpt
            frontmatter {
              name
              slug
              category
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 350, height: 350)
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
          <title>Commercial Properties in Faridabad | Real Value Properties</title>
          <meta
            name="description"
            content="Buy Commercial Properties like Shops, SCOs and Villa's/Plots in greater faridabad (Neharpar), sec-85, sec-86 from genuine buyers like Real Value."
          />
        </Helmet>
        <Header />
        <main>
          <Banner title={SERVICES[3].heading} desc={SERVICES[3].desc} img={img} alt={SERVICES[3].heading} />
          <Contact />
          <CategoriesPage list={list} />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
