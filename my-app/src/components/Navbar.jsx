import React, { useRef } from 'react'
import { FaTimes,FaBars } from 'react-icons/fa';
import "./Navbar.css"

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    }



    return (
        <div className='container'>
            <nav ref={navRef}>
                <a href='/#'>Fishing</a>
                <a href='/#'>Boating</a>
                <a href='/#'>Shooting</a>
                <a href='/#'>Hunting</a>
                <a href='/#'>Camping</a>
                <a href='/#'>Clothing</a>
                <a href='/#'>Footwear</a>
                <a href='/#'>Ride</a>
                <a href='/#'>Home&Gifts</a>
                <a href='/#'>Bargain Cave</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
           <button className='nav-btn' onClick={showNavbar}>
         <FaBars/>
           </button>
        </div>
    )
}

export default Navbar
