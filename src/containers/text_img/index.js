import BoxText from '../../components/box_text';
import './style.css';

const TextImg = () => {
    console.log('TextImg');

    return (
        <div className='text-img'>
            <BoxText />
            <img src='../../../images/desktop/image-transform.jpg'></img>
        </div>
    );
};

export default TextImg;
