import React from "react";
import styled from "styled-components";
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

const Disclaimer = styled.p`
  color: rgb(256, 256, 256, 0.7);
  margin: 0 auto 10px auto;
  max-width: 1100px;
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <address>
              Plot no. 1, opposite- Ozone park,
              <br />
              tigaon Road, sector - 86,
              <br />
              greater faridabad
            </address>
          </Address>

          <Number>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <p>
              <a href={`tel:${CONTACT_NUMBER}`}>{CONTACT_NUMBER}</a>
            </p>
          </Number>

          <Email>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
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
      <Disclaimer>
        By accessing this website, the viewer confirms that all the information including brochures, marketing collaterals, etc on this website are
        solely for informational purposes only. For recent details, please call at the numbers given in the website or visit our office address.
      </Disclaimer>
      <Digivats>
        Made with ❤️ by <a href="https://www.digivats.com">DIGIVATS</a>
      </Digivats>
    </Section>
  );
};

export default Footer;
