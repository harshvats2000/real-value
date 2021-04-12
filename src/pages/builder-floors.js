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
      file(relativePath: { eq: "4-builder.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "builder-floors" } } }) {
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
      <Helmet>
        <title>Builder Floors in Faridabad | Real Value</title>
        <meta name="description" content="Buy Builder Floors in greater faridabad (Neharpar), sec-85, sec-86 from genuine buyers like Real Value." />
      </Helmet>
      <Layout>
        <Header />
        <main>
          <Banner title={SERVICES[0].heading} desc={SERVICES[0].desc} img={img} alt={SERVICES[0].heading} />
          <Contact />
          <CategoriesPage list={list} />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
