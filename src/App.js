import './App.css';
import * as React from 'react';
import HeaderBox from './containers/header';
import BoxLogo from './containers/box_logo';
import TextImg from './containers/text_img';
import ContainerImg from './containers/container_img';
import BoxTestimonials from './containers/box_testimonials';
import FooterBox from './containers/footer';

function App() {
  const [typeDisplay, setTypeDisplay] = React.useState('');
  const breakpoint = 759;

  React.useEffect(() => {
    window.innerWidth > breakpoint ? setTypeDisplay('desktop') : setTypeDisplay('mobile');

    window.addEventListener("resize", () => {
      window.innerWidth > breakpoint ? setTypeDisplay('desktop') : setTypeDisplay('mobile');
    });
  }, []);

  return (
    <div className="App">
      <HeaderBox typeDisplay={typeDisplay} />

      <BoxLogo typeDisplay={typeDisplay} />

      <TextImg
        typeDisplay={typeDisplay}
        flex='row'
        title='Transform your brand'
        description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        color='yellow'
        img={`../../../images/${typeDisplay}/image-transform.jpg`}
      />

      <TextImg
        typeDisplay={typeDisplay}
        flex='row-reverse'
        title='Stand out to the right audience'
        description='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        color='red'
        img={`../../../images/${typeDisplay}/image-stand-out.jpg`}
      />

      <ContainerImg typeDisplay={typeDisplay} />

      <BoxTestimonials typeDisplay={typeDisplay} />

      <div className='images'>
        <img src={`../../../images/${typeDisplay}/image-gallery-milkbottles.jpg`}></img>
        <img src={`../../../images/${typeDisplay}/image-gallery-orange.jpg`}></img>
        <img src={`../../../images/${typeDisplay}/image-gallery-cone.jpg`}></img>
        <img src={`../../../images/${typeDisplay}/image-gallery-sugarcubes.jpg`}></img>
      </div>

      <FooterBox typeDisplay={typeDisplay} />
    </div>
  );
};

export default App;
