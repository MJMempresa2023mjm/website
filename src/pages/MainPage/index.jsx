import {
  ContainerLeft,
  ContainerRight,
  ContainerMaster,
  TitleSquad,
  SubTitleSquad,
  SquadInfo,
  LinkContact,
  SquadContentRight,
  SubTitleSquadRight,
  TitleSquadRight,
  ParagraphSquadRight,
} from './style';

const MainPage = () => {
  const numeroTelefone = '5514991820623';
  const mensagem = 'Oi, gostária de saber mais sobre os serviços!';
  const link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(
    mensagem
  )}`;
  return (
    <ContainerMaster>
      <ContainerLeft>
        <SquadInfo>
          <TitleSquad>
            Um novo conceito de aprendizagem profissional.
          </TitleSquad>
          <SubTitleSquad>
            Tudo em treinamentos, assesorias e mentorias para a sua industria.
          </SubTitleSquad>
          <LinkContact href={link}>Contato</LinkContact>
        </SquadInfo>
      </ContainerLeft>
      <ContainerRight>
        <SquadContentRight>
          <SubTitleSquadRight>A EMPRESA</SubTitleSquadRight>
          <TitleSquadRight>
            Desde 2020 transformando colaboradores em equipes qualificadas
          </TitleSquadRight>
          <ParagraphSquadRight>
            Com foco na melhora das equipes e aumento da eficiência nos
            processos, a MJM oferece planos personalizados e adaptáveis, com
            objetivo de atender qualquer necessidade específica da sua empresa.
          </ParagraphSquadRight>
          <LinkContact href={'/'}>Serviços</LinkContact>
        </SquadContentRight>
      </ContainerRight>
    </ContainerMaster>
  );
};

export default MainPage;
