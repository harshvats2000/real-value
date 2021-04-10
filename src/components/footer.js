import React from "react";
import styled from "styled-components";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";
import { Link } from "gatsby";
import { CONTACT_NUMBER, CONTACT_EMAIL, LINKS } from "../constants";

const Section = styled.footer`
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
`;

const FooterWrapper = styled.div`
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
  font-size: 20px !important;
  padding: 8px 0;
`;
const Number = styled.div`
  align-items: center;
  font-size: 20px !important;
  display: flex;
  a {
    margin: 4px 0;
    display: inline-block;
  }
`;
const Email = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px !important;
`;
const FooterLinks = styled.div`
  margin-bottom: 15px;
  & > a {
    margin: 0 4px;
  }
`;

const Digivats = styled.p`
  margin: 0;
  padding-bottom: 10px;
  color: white;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <FooterLeft>
          <h3>Real Value © {new Date().getFullYear()}</h3>
          <p>
            We are enthusiast to settle anything in connection with an entrusted real estate. Our team is committed in providing solutions related to
            real estate.
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
              <a href={`tel:9810445809`}>9810445809</a>
              <br />
              <a href={`tel:${CONTACT_NUMBER}`}>{CONTACT_NUMBER}</a>
              <br />
              <a href={`tel:9654324427`}>9654324427</a>
            </p>
          </Number>

          <Email>
            <FaMailBulk />
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </Email>
        </FooterCenter>

        <FooterRight>
          <FooterLinks>
            {LINKS.map((link, i) => (
              <Link key={i} to={`${link.url}`}>
                {link.label}
              </Link>
            ))}
          </FooterLinks>
        </FooterRight>
      </FooterWrapper>
      <Digivats>
        Made with ❤️ by <a href="https://www.digivats.com">DIGIVATS</a>
      </Digivats>
    </Section>
  );
};

export default Footer;
