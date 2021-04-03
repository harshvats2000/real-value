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

const Main = styled.main``;

// markup
const Home = () => {
  return (
    <Layout>
      <Helmet title="Real Value" />
      <Header />
      <Main>
        <Banner />
        <Services />
        <Team />
        <Reviews />
        <Contact />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
