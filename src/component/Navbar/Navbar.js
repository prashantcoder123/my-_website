import React, { useRef } from 'react';
import './Navbar.css';
// import '../../ScrollBar.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const navref = useRef();

    const shownavbar = () => {
        // e.preventDefault();
        navref.current.classList.toggle("responsive-nav");
    }

    const scrollToSection = (id,offset) => {
        const element = document.getElementById(id);

            // if (element) {
            //     element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: offset, });
            // }
            if (element) {
                const topPos = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: topPos - offset,
                  behavior: 'smooth',
                });
              }
        
        };
    return (
        <header>
            <h3><a href="/portfolio">Prashant.dev</a></h3>
            <nav ref={navref}>
                <a className='hover' onClick={() => {scrollToSection('home',100); shownavbar()}}>Home</a>
                <a className='hover' onClick={() => {scrollToSection('about',100); shownavbar()}}>About</a>
                <a className='hover' onClick={() => {scrollToSection('resume',100); shownavbar()}}>Resume</a>
                <a className='hover' onClick={() => {scrollToSection('projects',100); shownavbar()}}>Projects</a>
                <a className='hover' onClick={() => {scrollToSection('contact',100); shownavbar()}}>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={shownavbar} title='faTimes'>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={shownavbar} title='faBars'>
                <FaBars />
            </button>
            
        </header>
    );
}

export default Navbar;
