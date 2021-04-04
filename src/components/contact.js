import React, { useState } from "react";
import styled from "styled-components";
import { contact_email } from "../constants";

const Section = styled.section`
  width: 300px;
  margin: -10px auto 0 auto;
  position: relative;
  border-radius: 20px;
  padding-top: 20px;
  background: white;
`;
const FormWrapper = styled.div``;
const SectionHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 0;
`;
const Form = styled.form`
  text-align: center;
`;
const Input = styled.input`
  padding: 12px 8px;
  margin: 12px 0;
  width: 100%;
  transition: 0.5s;
  border: 2px solid gainsboro;
  &:focus {
    border: 2px solid black;
    outline: none;
  }
`;
const Button = styled.input`
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  background: black;
  color: white;
  border: none;
  padding: 10px;
  margin: 8px 0;
`;

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    number: ""
  });

  const onChange = ({ target: { name, value } }) => {
    setData({
      [`${name}`]: value
    });
  };

  return (
    <Section data-aos="fade-up">
      <SectionHeading id="contact">Request A Call Back</SectionHeading>
      <FormWrapper>
        <Form action={`https://formsubmit.co/${contact_email}`} method="POST">
          <input type="hidden" name="_cc" value="info@digivats.com" />
          <input type="hidden" name="_subject" value="Message from your website."></input>
          <input type="hidden" name="_template" value="table"></input>
          <Input type="text" name="name" placeholder="Your full name..." value={data.name} onChange={onChange} required />
          <br />
          <Input type="tel" name="number" placeholder="Your contact number..." value={data.number} onChange={onChange} required />
          <br />
          <Button type="submit" value="Submit" />
        </Form>
      </FormWrapper>
    </Section>
  );
};

export default Contact;
