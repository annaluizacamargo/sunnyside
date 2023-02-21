import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


const FooterBox = () => {
    return (
        <footer className='footer-box'>
            <h1>sunnyside</h1>
            <ul className='page'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
            </ul>
            <div className='contact'>
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
            </div>
        </footer>
    )
};

export default FooterBox;
