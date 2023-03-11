import {
  ContactIconLink,
  ContactMeContainer,
  Content,
  FormContainer,
  FormRowDiv,
  IconDescriptionContainer,
  IconSubtitleSpan,
  IconTitleSpan,
  SideBar,
} from "./contact-me.style";

import SectionTitle from "../section-title/section-title.component";

import { ReactComponent as LinkedInIcon } from "./../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "./../../assets/github.svg";
import { ReactComponent as EmailIcon } from "./../../assets/email.svg";
import React, { Fragment, useContext, useRef, useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  FormInputLabel,
  InputContainer,
  MessageArea,
} from "../form-input/form-input.style";
import Button from "../button/button.component";
import { ReactComponent as SendIcon } from "./../../assets/send.svg";
import emailjs from "@emailjs/browser";
import { GreetingText } from "../intro/intro.styles";
import HeaderTitle from "../title/title.component";
import { ThemeContext } from "../../context/themeContext";

const LINKED_IN = "Linkedin";
const GITHUB = "Github";
const EMAIL = "Email";

const ContactIcon = ({ title }) => {
  switch (title) {
    case LINKED_IN:
      return <LinkedInIcon />;

    case GITHUB:
      return <GithubIcon />;

    case EMAIL:
      return <EmailIcon />;

    default:
      return <Fragment />;
  }
};

const contacts = [
  {
    icon: LinkedInIcon,
    title: LINKED_IN,
    subtitle: "Ikenna Okpala",
    link: "https://www.linkedin.com/in/ikennajesse/",
  },

  {
    icon: GithubIcon,
    title: GITHUB,
    subtitle: "Ikenna-Okpala",
    link: "https://github.com/Ikenna-Okpala",
  },

  {
    icon: EmailIcon,
    title: EMAIL,
    subtitle: "ikennajesse77@gmail.com",
    link: "mailto: ikennajesse77@gmail.com",
  },
];

const defaultFormFields = {
  from_name: "",
  from_email: "",
  company: "",
  message: "",
};

export const ContactMe = React.forwardRef((props, ref) => {
  const form = useRef();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_u5mbl4k",
        "template_3os7nvd",
        form.current,
        "9FaZJ-BRFNC3d4rHp"
      )
      .then(
        (result) => {
          alert("Message Sent");
          setFormFields(defaultFormFields);
        },
        (emailError) => {
          alert("Message Failed");
          console.log(emailError);
        }
      );
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const { theme } = useContext(ThemeContext);

  return (
    <ContactMeContainer ref={ref}>
      <GreetingText>Let's connect</GreetingText>
      <HeaderTitle text="Contact me" />

      <Content>
        <SideBar>
          {contacts.map((contact) => (
            <ContactIconLink theme={theme} href={contact.link}>
              <IconDescriptionContainer theme={theme}>
                <ContactIcon title={contact.title} />
                <div>
                  <h2>{contact.title}</h2>

                  <GreetingText>{contact.subtitle}</GreetingText>
                </div>
              </IconDescriptionContainer>
            </ContactIconLink>
          ))}
        </SideBar>

        <FormContainer ref={form} onSubmit={sendEmail}>
          <FormRowDiv>
            <FormInput
              label="Name"
              type="text"
              required
              name="from_name"
              value={formFields.from_name}
              onChange={onChange}
            />
            <FormInput
              label="Email"
              type="email"
              required
              name="from_email"
              value={formFields.from_email}
              onChange={onChange}
            />
          </FormRowDiv>
          <FormInput
            label="Company"
            type="text"
            required
            name="company"
            value={formFields.company}
            onChange={onChange}
          />
          <InputContainer>
            <MessageArea
              theme={theme}
              name="message"
              value={formFields.message}
              onChange={onChange}
            />
            <FormInputLabel theme={theme} shrink={formFields.message.length}>
              Message
            </FormInputLabel>
          </InputContainer>

          <Button text={"Send Message"} type="Submit" Icon={SendIcon} />
        </FormContainer>
      </Content>
    </ContactMeContainer>
  );
});
