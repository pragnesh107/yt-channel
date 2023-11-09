import React from 'react'

function Navbar() {
    return (
        <nav>
                <h1><span>404 Not Found!</span></h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
                <div className='right'>
                    <button className='btn'>Login</button>
                    <button className='btn'>Signup</button>
                </div>
        </nav>
    );
}

export default Navbar;
