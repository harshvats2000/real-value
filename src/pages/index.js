import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import Team from "../components/team";
import Contact from "../components/contact";
import Reviews from "../components/reviews";
import Layout from "../Layout";
import HomeBanner from "../components/homeBanner";
import About from "../components/about";
import { graphql, useStaticQuery } from "gatsby";

const Main = styled.main``;

// markup
const Home = () => {
  console.log(1);
  const { img1, img2, img3, img4, img5 } = useStaticQuery(graphql`
    {
      img1: file(relativePath: { eq: "banner-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      img2: file(relativePath: { eq: "banner-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      img3: file(relativePath: { eq: "banner-3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      img4: file(relativePath: { eq: "banner-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      img5: file(relativePath: { eq: "banner-5.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>Buy your dream property in Greater Faridabad | Real Value Properties</title>
        <meta
          name="description"
          content="Buy best properties like builder floors, flats, affordable housing, and villas in greater faridabad (Neharpar) from genuine buyers."
        />
      </Helmet>
      <Header />
      <Main>
        <HomeBanner images={[img1, img2, img3, img4, img5]} />
        <Contact />
        <Services />
        <Reviews />
        <About />
        <Team />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
