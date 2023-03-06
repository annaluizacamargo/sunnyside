import './style.css';
import * as React from 'react';

const BoxLogo = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <div className='box-logo' id='about'>
            <div>
                <h1>We are creatives</h1>
                <img src='../../../images/icon-arrow-down.svg' alt='icon arrow dow' className='icon'></img>
            </div>
            <img alt='image header' src={`../../../images/${typeDisplay}/image-header.jpg` }></img>
        </div>
    );
};

export default BoxLogo;
