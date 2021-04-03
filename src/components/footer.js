import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import { Link } from "gatsby";

const FooterWrapper = styled.footer`
  display: flex;
  background: gainsboro;
  padding: 10px;
  & > div {
    flex: 1;
    margin: 0 30px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    & > div {
      margin: 0;
    }
  }
`;

const FooterLeft = styled.div`
  margin-left: 0 !important;
`;
const FooterCenter = styled.div``;
const FooterRight = styled.div`
  margin-right: 0 !important;
`;
const Address = styled.div`
  display: flex;
  align-items: center;
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
  & > a {
    margin: 0 4px;
  }
`;
const SocialLinks = styled.div`
  & > a {
    margin: 0 4px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft>
        <h3>
          Company<span>logo</span>
        </h3>

        <FooterLinks>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Team</Link>
          <Link>Contact</Link>
        </FooterLinks>

        <p className="footer-company-name">Company Name © 2015</p>
      </FooterLeft>

      <FooterCenter>
        <Address>
          <FaBeer />
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </Address>

        <Number>
          <FaBeer />
          <p>+1.555.555.5555</p>
        </Number>

        <Email>
          <FaBeer />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </Email>
      </FooterCenter>

      <FooterRight>
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <SocialLinks>
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
        </SocialLinks>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
