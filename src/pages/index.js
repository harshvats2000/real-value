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
import Banner from "../components/banner";
import About from "../components/about";
import { graphql, useStaticQuery } from "gatsby";

const Main = styled.main``;

// markup
const Home = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bg-home.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);
  const img = data.file;

  return (
    <Layout>
      <Helmet
        title="Buy your dream property in greater faridabad | Real Value"
        description="Buy best properties like builder floors, flats, affordable housing, and villas in greater faridabad (Neharpar) from genuine buyers."
      />
      <Header />
      <Main>
        <Banner
          img={img}
          alt="real value home interior"
          title="Dream Homes in Faridabad"
          desc="Buy best property: Builder Floors | Flats | Villas | Plots/SCO's in Faridabad."
        />
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
