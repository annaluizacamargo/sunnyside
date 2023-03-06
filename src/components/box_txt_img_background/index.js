import './style.css';

const ContainerTextWithImageBackground = (props) => {
    const title = props.title;
    const description = props.description;
    const textColor = props.color;
    const imageBackground = props.img;

    return (
        <div className='box-dual'>
            <img src={imageBackground}></img>
            <div style={{ color: textColor }}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ContainerTextWithImageBackground;
