import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import Banner from "../components/banner";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

const Page = (props) => {
  const {
    frontmatter: { image, name, category, description, plan },
    html
  } = props.data.allFile.edges[0].node.childMarkdownRemark;

  return (
    <>
      <Helmet>
        <title>
          {name} | {category} in Faridabad | Real Value Properties
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <Header />
        <Banner img={image} alt={name} title={name} desc={description} />
        <Content>
          <h2 style={{ textTransform: "capitalize" }}>
            {category} {">"} {name}
          </h2>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Floor Plan</Tab>
            </TabList>

            <TabPanel>
              <article dangerouslySetInnerHTML={{ __html: html }} />
            </TabPanel>
            <TabPanel>
              {plan.length === 0 ? (
                <h1>No Floor plan available.</h1>
              ) : (
                <ul>
                  {plan.map((p, i) => (
                    <li key={i}>
                      <p>{p.name}</p>
                      <GatsbyImage image={getImage(p.img)} alt={name} />
                    </li>
                  ))}
                </ul>
              )}
            </TabPanel>
          </Tabs>
        </Content>
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default Page;

const Content = styled.section`
  padding: 10px;
  line-height: 30px;
  max-width: 800px;
  margin: auto;
  background: #f1f1f1;
`;

export const query = graphql`
  query Item($id: String) {
    allFile(filter: { sourceInstanceName: { eq: "services" }, extension: { eq: "md" }, id: { eq: $id } }) {
      edges {
        node {
          id
          extension
          childMarkdownRemark {
            html
            frontmatter {
              name
              category
              slug
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              plan {
                name
                img {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
