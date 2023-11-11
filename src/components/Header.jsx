import React from "react";
import {
  Container,
  Info,
  InfoLogo,
  InfoLink,
  ContactLink,
  Logo,
  ContactContainer,
  HamburgerMenu,
  ContainerInteration,
} from "./style";

import { FaPhone, FaBars, FaX } from "react-icons/fa6";

export default function Header() {
  const [value, setValue] = React.useState(false);

  return (
    <Container>
      <InfoLogo to={"/"}>
        <Logo src="/logo.svg" alt="logo da marca MJM" />
      </InfoLogo>

      <Info>
        <InfoLink to={"/"}>Quem somos</InfoLink>
        <InfoLink to={"/"}>Serviços</InfoLink>
        <InfoLink to={"/"}>Projetos</InfoLink>
      </Info>
      <ContactContainer>
        <HamburgerMenu
          onClick={() => {
            setValue(!value);
          }}
        >
          {value ? (
            <FaX fill="#202020" size={25} />
          ) : (
            <FaBars fill="#202020" size={30} />
          )}
        </HamburgerMenu>
        <ContactLink to={"/"}>
          <FaPhone fill="#202020" size={15} />
        </ContactLink>
      </ContactContainer>
      {value ? (
        <ContainerInteration>
          <InfoLink to={"/"}>QUEM SOMOS</InfoLink>
          <InfoLink to={"/"}>SERVIÇOS</InfoLink>
          <InfoLink to={"/"}>PROJETOS</InfoLink>
        </ContainerInteration>
      ) : null}
    </Container>
  );
}
