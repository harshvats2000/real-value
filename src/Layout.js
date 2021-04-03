import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans";
  }
`;

const theme = {
  primary: "#b0f3f6"
};

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
}
