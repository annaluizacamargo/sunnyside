import BoxText from '../../components/box_text';
import './style.css';

const TextImg = () => {
    console.log('TextImg');

    return (
        <div className='text-img'>
            <BoxText 
                title='Transform your brand'
                description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
                color='yellow'
            />
            <img src='../../../images/desktop/image-transform.jpg'></img>
        </div>
    );
};

export default TextImg;
