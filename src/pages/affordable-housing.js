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
      file(relativePath: { eq: "affordable.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "affordable-housing" } } }) {
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
          <CategoriesPage list={list} />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
