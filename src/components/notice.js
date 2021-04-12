import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const Para = styled.div`
  p {
    background: #d24196;
    color: white;
    margin: 0;
    padding: 4px;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const Notice = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { name: { eq: "notice" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
  const notice = data.allMarkdownRemark.edges[0].node.html;
  return notice === "" ? null : <Para dangerouslySetInnerHTML={{ __html: notice }} />;
};

export default Notice;
