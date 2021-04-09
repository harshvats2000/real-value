import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import Banner from "../components/banner";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

const Content = styled.section`
  padding: 10px;
`;

const Page = (props) => {
  const { slug } = props.pageContext;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              slug
              name
              category
              description
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
  `).allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.slug === slug)[0];
  const {
    frontmatter: { image, name, category, description, plan },
    html
  } = data.node;

  return (
    <>
      <Helmet title={`${name} | Real Value`} description={description} />
      <Layout>
        <Header />
        <Banner img={image} alt={name} title={name} desc={description} />
        <Content>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Floor Plan</Tab>
            </TabList>

            <TabPanel>
              <article dangerouslySetInnerHTML={{ __html: html }} />
            </TabPanel>
            <TabPanel>
              <ul>
                {plan.map((p, i) => (
                  <li key={i}>
                    <p>{p.name}</p>
                    <GatsbyImage image={getImage(p.img)} alt={name} />
                  </li>
                ))}
              </ul>
            </TabPanel>
          </Tabs>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
