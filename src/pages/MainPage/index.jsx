import {
  ContainerLeft,
  ContainerRight,
  ContainerMaster,
  TitleSquad,
  SubTitleSquad,
  SquadInfo,
  ButtonContact,
} from "./style";

const MainPage = () => {
  const numeroTelefone = '5514996634745';
  const mensagem = 'Oi podemos conversar?';
  const link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
  return (
    <ContainerMaster>
      <ContainerLeft>
        <SquadInfo>
          <TitleSquad>
            Um novo conceito de aprendizagem nas empresas.
          </TitleSquad>
          <SubTitleSquad>
            Tudo em treinamentos, assesorias e mentorias para a sua industria.
          </SubTitleSquad>
          <a href={link}>
            <ButtonContact>Contato</ButtonContact>
          </a>
        </SquadInfo>
      </ContainerLeft>
      <ContainerRight></ContainerRight>
    </ContainerMaster>
  );
};

export default MainPage;
