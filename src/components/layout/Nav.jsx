import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav">

            <ul className="nav-list">

                <Link to={'/projects'} ><li>Proyectos</li></Link>
                <li>Contacto</li>
            </ul>


        </nav>
    )
}

export default Nav