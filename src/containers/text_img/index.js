import BoxText from '../../components/box_text';
import './style.css';

const TextImg = (props) => {
    const flexDirectionBox = props.flex;
    const title = props.title;
    const description = props.description;
    const color = props.color;

    return (
        <div className='text-img' style={{ flexDirection: flexDirectionBox }}>
            <BoxText
                title={title}
                description={description}
                color={color}
            />
            <img src='../../../images/desktop/image-transform.jpg'></img>
        </div>
    );
};

export default TextImg;
