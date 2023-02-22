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

    const styleBoxText = {
        backgroundColor: backgroundColorImage
    };

    return (
        <div className='box-dual' style={styleBox}>
            <div style={styleBoxText}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BoxDual;
