import React, { useEffect, useState, useRef } from 'react'
import Nav from './Nav';
import {ConsoleText,data,colors} from '../../utils/ConsoleText';

import { Link } from 'react-router-dom';

const Header = () => {
    const [mode, setMode] = useState(false);

    const title = useRef(null);
    const consoleBar = useRef(null);

    const changeThema = () => {
        setMode(!mode);
        if (!mode) {
            console.log("son distintos");
            window.document.body.style = 'background-color: #0f2b36';
        } else {
            window.document.body.style = 'background-color: #f1f1f1';

        }

    }

    useEffect(() => {
        let data = ["Hello world", "I'm Benjamin", "Hola mundo", "Soy Benjamín"];
        ConsoleText(data, colors, title, consoleBar);

    }, [])




    return (
        <header className="header">
            <Link to={'/'}>
                <div className="nav-title">
                    <h1 ref={title}></h1>
                    <h1 ref={consoleBar} className="console-underscore"> </h1>
                </div>
            </Link>
            <Nav />
            <ul className=" change-color">
                {!mode ?
                    <li onClick={changeThema}><i className="fa-solid fa-moon"></i>  Oscuro</li>
                    :
                    <li onClick={changeThema}><i className="fa-regular fa-sun"></i> Claro</li>

                }
            </ul>
        </header >
    )
}

export default Header