import BoxText from '../../components/box_text';
import './style.css';

const TextImg = (props) => {
    const flexDirectionBox = props.flex;
    const title = props.title;
    const description = props.description;
    const color = props.color;
    const image = props.img;

    return (
        <div className='text-img' style={{ flexDirection: flexDirectionBox }}>
            <BoxText
                title={title}
                description={description}
                color={color}
            />
            <img src={image}></img>
        </div>
    );
};

export default TextImg;
