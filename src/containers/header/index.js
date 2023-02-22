import { useState } from 'react';
import './style.css';

const HeaderBox = (props) => {
    const handleClickScroll = props.handleClickScroll;
    const [showMenu, setShowMenu] = useState(false);

    function showMenuDisplay() {
        setShowMenu(!showMenu);
        const menuAba = document.getElementById('arrow-up');
        const menu = document.getElementById('ul-menu');

        if (showMenu) {
            menuAba.style.display = 'block';
            menu.style.display = 'inline-block';
        } else {
            menuAba.style.display = 'none';
            menu.style.display = 'none';
        };
    };

    return (
        <header>
            <div className='header-box'>
                <h1>Sunnyside</h1>

                <button className='btn-hamburguer' onClick={showMenuDisplay}>
                    <img src='../../../images/icon-hamburger.svg'></img>
                </button>
            </div>

            <div id="arrow-up"></div>

            <ul id='ul-menu'>
                <li onClick={handleClickScroll}>About</li>
                <li onClick={handleClickScroll}>Services</li>
                <li onClick={handleClickScroll}>Projects</li>
                <li onClick={handleClickScroll}>Contact</li>
            </ul>
        </header>
    );
};

export default HeaderBox;
