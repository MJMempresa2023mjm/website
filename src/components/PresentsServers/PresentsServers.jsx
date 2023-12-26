import React from 'react';
import { slides } from '../../data/Clients';
import { ContainerTall, ContainerProtect, Container } from './style';
function PresentsServers() {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    function slideNext() {
      if (active < slides.length - 1) {
        setActive(active + 1);
        console.log(active);
      } else if (active >= 2) {
        setActive(0);
      }
    }
    const interval = setInterval(() => {
      slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  const imgSlides = slides.map(({ id, name, image }) => (
    <Container key={id}>
      {image === '' ? null : (
        <img src={image} alt={name} style={{ width: '150px' }} />
      )}
      {image === '' ? <h2>{name}</h2> : null}
    </Container>
  ));

  return (
    <ContainerTall>
      <h1>Algumas empresas</h1>
      <ContainerProtect
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {imgSlides}
      </ContainerProtect>
    </ContainerTall>
  );
}

export default PresentsServers;
