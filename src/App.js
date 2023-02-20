import './App.css';
import HeaderBox from './containers/header';
import BoxLogo from './containers/box_logo';
import TextImg from './containers/text_img';
import ContainerImg from './containers/container_img';
import BoxTestimonials from './containers/box_testimonials';
import FooterBox from './containers/footer';

function App() {
  return (
    <div className="App">
      <HeaderBox />

      <BoxLogo />

      <TextImg
        flex='row'
        title='Transform your brand'
        description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        color='yellow'
        img='../../../images/desktop/image-transform.jpg'
      />

      <TextImg
        flex='row-reverse'
        title='Stand out to the right audience'
        description='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        color='red'
        img='../../../images/desktop/image-stand-out.jpg'
      />
      
      <ContainerImg />

      <BoxTestimonials />

      <div className='images'>
        <img src='../../../images/desktop/image-gallery-milkbottles.jpg'></img>
        <img src='../../../images/desktop/image-gallery-orange.jpg'></img>
        <img src='../../../images/desktop/image-gallery-cone.jpg'></img>
        <img src='../../../images/desktop/image-gallery-sugarcubes.jpg'></img>
      </div>

      <FooterBox />
    </div>
  );
};

export default App;
