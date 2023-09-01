import React from 'react'
import { Link } from 'react-router-dom'

const SendEmail = ({ classStyle }) => {
    const mailLink = `mailto:benjamin.soto@virginiogomez.cl?subject=Hola%20soy%20un asunto%20para%20benjamin&body=Hola,%20escribe%20lo %20que%20quieras.%20Gracias%20por%20visitar%20mi%20pagina c:`
    return (
        <>
            <Link to={mailLink}>
                <li className={classStyle}>Enviar email</li>
            </Link>
        </>
    )
}


export default SendEmail