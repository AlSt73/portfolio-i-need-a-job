import { Link } from 'react-router-dom'
import SendEmail from './SendEmail'

const Nav = () => {
    return (
        <nav className="nav">

            <ul className="nav-list">

                <Link to={'/projects'} ><li>Proyectos</li></Link>
                <SendEmail classStyle="" />
            </ul>


        </nav>
    )
}

export default Nav