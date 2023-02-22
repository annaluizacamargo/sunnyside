import './style.css';

const BoxImages = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div className='box-images'>
            <img src={`../../../images/${typeDisplay}/image-gallery-milkbottles.jpg`}></img>
            <img src={`../../../images/${typeDisplay}/image-gallery-orange.jpg`}></img>
            <img src={`../../../images/${typeDisplay}/image-gallery-cone.jpg`}></img>
            <img src={`../../../images/${typeDisplay}/image-gallery-sugarcubes.jpg`}></img>
        </div>
    );
};

export default BoxImages;
