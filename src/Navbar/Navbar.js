import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <header className='header'>
            <div className='navbar'>
                <div className='navbar-title flex flex-subcontainer'>
                    <h2 id='title'>Password Generator</h2>
                </div>
                <div className='flex-subcontainer'>
                    <div>About</div>
                </div>
            </div> 
        </header>
    );
};

export default Navbar;