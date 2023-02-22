import './App.css';
import * as React from 'react';
import HeaderBox from './containers/header';
import BoxLogo from './containers/box_logo';
import TextImg from './containers/text_img';
import ContainerImg from './containers/container_img';
import BoxTestimonials from './containers/box_testimonials';
import FooterBox from './containers/footer';
import BoxImages from './containers/box_images';

function App() {
  const [typeDisplay, setTypeDisplay] = React.useState('');
  const breakpoint = 759;

  React.useEffect(() => {
    window.innerWidth > breakpoint ? setTypeDisplay('desktop') : setTypeDisplay('mobile');

    window.addEventListener("resize", () => {
      window.innerWidth > breakpoint ? setTypeDisplay('desktop') : setTypeDisplay('mobile');
    });
  }, []);

  const handleClickScroll = (event) => {
    const elementClick = event.target.textContent.toLowerCase();
    const about = document.getElementById('about');
    const services = document.getElementById('services');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    switch (true) {
      case (elementClick == 'about'):
        about.scrollIntoView({ behavior: 'smooth' });
        break;
      case (elementClick == 'services'):
        services.scrollIntoView({ block: "start", behavior: 'smooth' });
        break;
      case (elementClick == 'projects'):
        projects.scrollIntoView({ behavior: 'smooth' });
        break;
      case (elementClick == 'contact'):
        contact.scrollIntoView({ behavior: 'smooth' });
        break;
    };
  };

  return (
    <div className="App">
      <HeaderBox typeDisplay={typeDisplay} handleClickScroll={handleClickScroll} />

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

      <BoxImages typeDisplay={typeDisplay} />

      <FooterBox typeDisplay={typeDisplay} handleClickScroll={handleClickScroll} />
    </div>
  );
};

export default App;
