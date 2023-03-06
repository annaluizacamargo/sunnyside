import './App.css';
import * as React from 'react';
import Header from './containers/header';
import AboutSection from './containers/about_section';
import ServicesSection from './containers/services_section';
import TestimonialsSection from './containers/testimonials_section';
import ProjectsSection from './containers/projects_section';
import ContactSection from './containers/contact_section';

function App() {
  const [typeDisplay, setTypeDisplay] = React.useState('');
  const breakpoint = 999;

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
      <Header typeDisplay={typeDisplay} handleClickScroll={handleClickScroll} />

      <AboutSection typeDisplay={typeDisplay} />

      <ServicesSection typeDisplay={typeDisplay} />

      <TestimonialsSection />

      <ProjectsSection typeDisplay={typeDisplay} />

      <ContactSection typeDisplay={typeDisplay} handleClickScroll={handleClickScroll} />
    </div>
  );
};

export default App;
