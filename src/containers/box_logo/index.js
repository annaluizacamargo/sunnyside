import './style.css';
import * as React from 'react';

const BoxLogo = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div className='box-logo'>
            <div>
                <h1>We are creatives</h1>
                <img src='../../../images/icon-arrow-down.svg' className='icon'></img>
            </div>
            <img src={`../../../images/${typeDisplay}/image-header.jpg`}></img>
        </div>
    );
};

export default BoxLogo;
