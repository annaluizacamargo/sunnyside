import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ContactSection = (props) => {
    const handleClickScroll = props.handleClickScroll;

    return (
        <footer className='footer-box' id='contact'>
            <h1>sunnyside</h1>
            <ul className='page'>
                <li onClick={handleClickScroll} value='about' >About</li>
                <li onClick={handleClickScroll} value='services' >Services</li>
                <li onClick={handleClickScroll} value='projects' >Projects</li>
            </ul>
            <div className='contact'>
                <FontAwesomeIcon icon={faFacebookSquare} onClick={handleClickScroll} />
                <FontAwesomeIcon icon={faInstagram} onClick={handleClickScroll} />
                <FontAwesomeIcon icon={faTwitter} onClick={handleClickScroll} />
                <FontAwesomeIcon icon={faPinterest} onClick={handleClickScroll} />
            </div>
        </footer>
    )
};

export default ContactSection;
