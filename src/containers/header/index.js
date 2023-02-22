import { useEffect, useState } from 'react';
import './style.css';

const HeaderBox = (props) => {
    const typeDisplay = props.typeDisplay;

    return (
        <header>
            <div className='header-box'>
                <h1>Sunnyside</h1>

                <button className='btn-hamburguer'>
                    <img src='../../../images/icon-hamburger.svg'></img>
                </button>
            </div>
            
            <div class="arrow-up"></div>
            
            <ul className='ul-menu'>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </header>
    );
};

export default HeaderBox;
