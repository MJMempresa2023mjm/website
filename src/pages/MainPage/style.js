import styled from 'styled-components';

export const ContainerMaster = styled.div`
  width: 100%;
  height: 200vh;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #017427;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SquadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 50%;
  width: 80%;
  padding: 0px 20px 0px 20px;
  color: white;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    width: 90%;
    height: 70vh;
    margin-top: 50px;
  }
`;

export const TitleSquad = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    line-height: 35px;
    margin-bottom: 40px;
  }
`;

export const SubTitleSquad = styled.h2`
  font-size: 1rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const LinkContact = styled.a`
  margin-top: 50px;
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 7px;

  color: white;
  background-color: #f89007;

  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    background-color: #f89007a6;
    border: 1px solid #f89010;
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('/teste_fabrica.jpg');
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SquadContentRight = styled.div`
  margin-top: 50px;
  width: 70%;
  height: 80%;

  padding: 5px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  border-radius: 7px;

  background-color: white;
  color: #017427;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
    height: 90%;
  }
`;

export const TitleSquadRight = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
  }
`;

export const SubTitleSquadRight = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 40px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ParagraphSquadRight = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;
