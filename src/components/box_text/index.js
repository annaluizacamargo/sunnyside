import './style.css';
import { useState } from 'react';

const BoxText = (props) => {
    const title = props.title;
    const description = props.description;
    const color = props.color;

    const [bg, setBg] = useState('white');
    const styleHoverText = {
        background: `linear-gradient(var(--white) 70%, var(--${bg}) 71%)`,
    };
    const hover = (color) => setBg(color);

    return (
        <div className='box_text' >
            <h1>{title}</h1>
            <p>{description}</p>
            <h5
                style={styleHoverText}
                onMouseEnter={() => hover(color)}
                onMouseLeave={() => hover('white')}
            >Learn more</h5>
        </div>
    );
};

export default BoxText;
