import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Navigation.css';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleSidebarMenu = () => setShowMenu(!showMenu);

    return (
        <nav className='navigation-container container'>
            <div className='logo-container'>
                <h5 className='logo'>TiroAceInt</h5>
            </div>
            <div className='hamburger-menu-icon-container'>
                <FiMenu onClick={handleSidebarMenu} className='hamburger-menu-icon' />
            </div>
            <ul className={showMenu ? 'nav-link-container active' : 'nav-link-container'}>
                <div className='close-menu-icon-container'>
                    <AiOutlineCloseCircle onClick={handleSidebarMenu} className='close-icon' />
                </div>
                <li><span className='navigation-link'>Home</span></li>
                <li><span className='navigation-link'>Marketing Tools</span></li>
                <li><button className='contact-btn'>Contact Us</button></li>
            </ul>
        </nav>
    );
};

export default Navigation;