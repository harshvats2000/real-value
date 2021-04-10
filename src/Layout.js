import React, { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans";
  }
`;

const theme = {
  primary: "#b0f3f6",
  secondary: "#0283ad"
};

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
}
