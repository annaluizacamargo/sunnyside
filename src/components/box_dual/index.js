import './style.css';

const BoxDual = (props) => {
    const title = props.title;
    const description = props.description;
    const textColor = props.color;
    const backgroundColorImage = props.backgroundColor;
    const imageBackground = props.img;

    const styleBox = {
        backgroundColor: backgroundColorImage,
        backgroundImage: `url(${imageBackground})`,
        color: `var(--${textColor}`,
    };

    return (
        <div className='box-dual' style={styleBox}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default BoxDual;
