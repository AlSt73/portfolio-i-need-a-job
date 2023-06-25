import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header className="header">
            <h1>Benjamín Soto</h1>
            <Nav />
            <ul className="nav-list change-color">
                <li>Color</li>
            </ul>
        </header>
    )
}

export default Header