import React from 'react'

import './Header.css'

const Header = (props) => {

    return (
        <header className={props.black ?"black" : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Logo"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar"/>
                </a>
            </div>
        </header>
    )
};

export default Header;