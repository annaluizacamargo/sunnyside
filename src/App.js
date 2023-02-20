import './App.css';
import BoxDual from './components/box_dual';
import BoxText from './components/box_text';
import TextImg from './containers/text_img';

function App() {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
