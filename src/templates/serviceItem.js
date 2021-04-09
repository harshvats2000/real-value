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

const Page = (props) => {
  const { slug } = props.pageContext;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(format: HTML)
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
    excerpt
  } = data.node;

  return (
    <>
      <Helmet title={name} description={description} />
      <Layout>
        <Header />
        <Banner img={image} alt={name} title={name} desc={description} />
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Layout Plan</Tab>
          </TabList>

          <TabPanel>
            <article dangerouslySetInnerHTML={{ __html: excerpt }} />
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
        <Footer />
      </Layout>
    </>
  );
};

export default Page;
