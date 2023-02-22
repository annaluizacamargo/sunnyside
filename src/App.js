import './App.css';
import * as React from 'react';
import HeaderBox from './containers/header';
import BoxLogo from './components/box_logo';
import TextImg from './components/box_txt_img';
import ContainerImg from './containers/boxServices';
import BoxTestimonials from './containers/box_testimonials';
import BoxImages from './containers/boxProjects';
import Contact from './containers/contact';
import BoxProjects from './containers/boxProjects';
import BoxServices from './containers/boxServices';
import BoxTxtImg from './components/box_txt_img';
import BoxAbout from './containers/box_about';

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

      <BoxAbout typeDisplay={typeDisplay} />

      <BoxServices typeDisplay={typeDisplay} />

      <BoxTestimonials />

      <BoxProjects typeDisplay={typeDisplay} />

      <Contact typeDisplay={typeDisplay} handleClickScroll={handleClickScroll} />
    </div>
  );
};

export default App;
