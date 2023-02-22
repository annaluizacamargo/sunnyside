import BoxText from '../box_text';
import './style.css';

const BoxTxtImg = (props) => {
    const typeDisplay = props.typeDisplay;
    const flexDirectionBox = props.flex;
    const title = props.title;
    const description = props.description;
    const color = props.color;
    const image = props.img;

    return (
        <div className='text-img' style={{ flexDirection: `${typeDisplay == 'desktop' ? flexDirectionBox : 'column-reverse'}` }}>
            <BoxText
                title={title}
                description={description}
                color={color}
            />
            <img src={image}></img>
        </div>
    );
};

export default BoxTxtImg;
