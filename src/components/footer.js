import React from "react";
import styled from "styled-components";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";
import { Link } from "gatsby";
import { contact_number, contact_email, Links } from "../constants";

const FooterWrapper = styled.footer`
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  display: flex;
  @media (min-width: 750px) {
    align-items: center;
  }
  color: rgb(256, 256, 256, 0.8);
  a {
    color: rgb(256, 256, 256, 0.8);
  }
  padding: 50px 10px;
  & > div {
    flex: 1;
    margin: 0 30px;
  }
  @media (max-width: 750px) {
    padding: 20px 10px;
    flex-direction: column;
    & > div {
      margin: 0;
    }
  }
`;

const FooterLeft = styled.div`
  margin-left: 0 !important;
`;
const FooterCenter = styled.div`
  svg {
    margin-right: 8px;
  }
`;
const FooterRight = styled.div`
  margin-right: 0 !important;
`;
const Address = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;
const Number = styled.div`
  align-items: center;
  display: flex;
`;
const Email = styled.div`
  align-items: center;
  display: flex;
`;
const FooterLinks = styled.div`
  margin-bottom: 15px;
  & > a {
    margin: 0 4px;
  }
`;
// const SocialLinks = styled.div`
//   & > a {
//     margin: 0 4px;
//   }
// `;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft>
        <h3>Real Value © {new Date().getFullYear()}</h3>
        <p>
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
      </FooterLeft>

      <FooterCenter>
        <Address>
          <FaLocationArrow />
          <address>
            Plot no. 1, opposite- Ozone park,
            <br />
            tigaon Road, sector - 86,
            <br />
            greater faridabad
          </address>
        </Address>

        <Number>
          <FaPhone />
          <p>
            <a href={`tel:${contact_number}`}>{contact_number}</a>
          </p>
        </Number>

        <Email>
          <FaMailBulk />
          <p>
            <a href={`mailto:${contact_email}`}>{contact_email}</a>
          </p>
        </Email>
      </FooterCenter>

      <FooterRight>
        <FooterLinks>
          {Links.map((link, i) => (
            <Link key={i} to={`${link.url}`}>
              {link.label}
            </Link>
          ))}
        </FooterLinks>

        {/* <SocialLinks>
          <Link>
            <FaBeer />
          </Link>
          <Link>
            <FaBeer />
          </Link>
          <Link>
            <FaBeer />
          </Link>
          <Link>
            <FaBeer />
          </Link>
        </SocialLinks> */}
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
