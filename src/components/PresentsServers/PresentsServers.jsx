import React from 'react';
import { slides } from '../../data/Clients';
import { ContainerTall, ContainerProtect, Container } from './style';
function PresentsServers() {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));

    function slideNext() {
      if (active < slides.length - 1) {
        setActive(active + 1);
        console.log(width);
      } else if (active >= 4) {
        console.log('ativado');
        setActive(0);
      }
    }

    function slideNextBig() {
      if (active < 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }

    const interval = setInterval(() => {
      if (width < 768) {
        slideNext();
      } else {
        slideNextBig();
      }
    }, 3000);

    return () => clearInterval(interval);
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
