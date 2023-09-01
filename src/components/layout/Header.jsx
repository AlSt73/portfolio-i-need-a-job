import React, { useEffect, useState, useRef } from 'react'
import Nav from './Nav';
import { ConsoleText, data, colors } from '../../utils/ConsoleText';
import {  useMediaQuery } from '@react-hook/media-query';


import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
    const [mode, setMode] = useState(false);

    const isMobileSize = useMediaQuery('(max-width: 653px)');


    const title = useRef(null);
    const consoleBar = useRef(null);

    const changeThema = () => {
        setMode(!mode);
        if (!mode) {
            console.log("son distintos");
            window.document.body.classList.add('dark-theme');
        } else {
            window.document.body.classList.remove('dark-theme');

        }

    }

    useEffect(() => {
        let colors = ['#6fbee0', '#47b1df', '#78abc8', "#26a5db"];
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
            {
                isMobileSize ? <NavMobile />
                    :
                    <Nav />
            }
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