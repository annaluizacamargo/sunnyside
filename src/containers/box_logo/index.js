import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


const BoxLogo = () => {
    return (
        <div className='box-logo'>
            <h1>We are creatives</h1>
            <FontAwesomeIcon icon={faArrowDownLong} />
            <img src='../../../images/desktop/image-header.jpg'></img>
        </div>
    );
};

export default BoxLogo;
