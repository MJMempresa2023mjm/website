import styled from 'styled-components';

export const ContainerTall = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
`;

export const ContainerProtect = styled.div`
  width: 100%;
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
  padding: 0 2.5%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  width: 25%;
  margin-right: 10%;
  border-radius: 4px;
  background-color: #eee;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin: 0 10%;
    width: 80%;
  }
`;
