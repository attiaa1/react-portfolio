import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return(
        <div className='navBar'>
            <div className='navBarJustifyStart'>
                <div className='navItem'>About</div>
                <div className='navItem'>Projects</div>
                <div className='navItem'>Experience</div>
            </div>
            <div className='navBarJustifyEnd'>
                <div className='navItem'>Contact Me</div>
            </div>
        </div>
    );
}

export default NavBar;