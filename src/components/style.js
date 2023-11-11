import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 60px;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  width: 250px;
`;

export const InfoLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 40%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: #101010;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 1px 5px;
  border-bottom: 2px solid transparent;
  transition: border 0.5s;

  &:hover {
    border-bottom: 2px solid #174502;
  }

  @media screen and (max-width: 768px) {
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }
`;

export const ContactLink = styled(Link)`
  text-decoration: none;
  color: #101010;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  gap: 7px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;

    background-color: transparent;
    border: none;

    cursor: pointer;
    z-index: 1;
  }
`;

export const ContainerInteration = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: orange;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
