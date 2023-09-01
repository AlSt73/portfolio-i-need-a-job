import  { useState } from 'react'
import { Link } from 'react-router-dom';
import SendEmail from './SendEmail';

const NavMobile = () => {

    const [isSelected, setIsSelected] = useState(false);
    const [mode, setMode] = useState(false);
    const changeThema = () => {
        setMode(!mode);
        if (!mode) {
            console.log("son distintos");
            window.document.body.classList.add('dark-theme');
        } else {
            window.document.body.classList.remove('dark-theme');

        }

    }

    return (
        <div className="nav-mobile">
            <button className="btn-menu" onClick={() => setIsSelected(!isSelected)}>
                {!isSelected ?
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    :
                    <i className="fa-solid fa-x"></i>
                }
            </button>
            {
                isSelected &&
                <div className="list-container">
                    <ul className="nav-list-mobile">
                        <Link to="/projects" ><li className="li">Proyectos</li></Link>
                        <SendEmail classStyle="li" />
                        {!mode ?
                            <li onClick={changeThema} className='li'><i className="fa-solid fa-moon"></i>  Oscuro</li>
                            :
                            <li onClick={changeThema} className='li'><i className="fa-regular fa-sun"></i> Claro</li>

                        }


                    </ul>
                </div>

            }
        </div>
    )
}

export default NavMobile