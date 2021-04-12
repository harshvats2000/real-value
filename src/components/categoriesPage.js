import React from "react";
import { List, ListItem, ImageWrapper, Name, ViewMore, Para } from "../styles/categoriesPage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const CategoriesPage = ({ list }) => {
  return (
    <>
      <List>
        {list.map((l, i) => {
          const { name, image, slug, category } = l.node.frontmatter;
          const { excerpt = "" } = l.node;
          return (
            <ListItem key={i}>
              <ImageWrapper>
                <GatsbyImage image={getImage(image)} alt={name} />
              </ImageWrapper>
              <Name>{name}</Name>
              <Para>{excerpt}</Para>
              <ViewMore>
                <Link to={`/${category}/${slug}`}>View More</Link>
              </ViewMore>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CategoriesPage;
