import { useEffect, useState } from 'react';
import './style.css';

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState("");
    const handleClickScroll = props.handleClickScroll;
    const typeDisplay = props.typeDisplay;

    useEffect(() => {
        setActive('about');
    }, [])

    const btnClick = (event) => {
        setActive(event.target.innerHTML.toLowerCase());
        handleClickScroll(event);
    }

    function showMenuDisplay() {
        if (typeDisplay == 'mobile') {
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
    };

    return (
        <header>
            <div className='header-box'>
                <img src="../../../images/logo.svg" alt="" className="logo"></img>
                <button className='btn-hamburguer' onClick={showMenuDisplay}>
                    <img src='../../../images/icon-hamburger.svg'></img>
                </button>
            </div>

            <div id="arrow-up"></div>

            <ul id='ul-menu'>
                <li to='/'
                    className={active === "about" ? "active" : undefined}
                    onClick={btnClick}
                >About</li>

                <li
                    className={active === "services" ? "active" : undefined}
                    onClick={btnClick}
                >Services</li>

                <li
                    className={active === "projects" ? "active" : undefined}
                    onClick={btnClick}
                >Projects</li>

                <li
                    className={active === "contact" ? "active" : undefined}
                    onClick={btnClick}
                >Contact</li>
            </ul>
        </header>
    );
};

export default Header;
