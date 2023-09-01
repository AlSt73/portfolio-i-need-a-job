import React, { useEffect, useState } from 'react'
import { showData } from '../../utils/SupabaseMethod'
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            showData(setProjects)
            setIsLoading(false);
        }, 1000)
    }, [])
    return (
        <section className="project-container">
            <h1 className="title">Proyectos</h1>
            <article className="project-list">
                {
                    isLoading ? <Loading/> :
                        projects.map((p,k) => {
                            return <ul key={p.id}>
                                <Link to={'/project/'+p.id}>
                                    <img key={k} src={p.images[0]} alt={p.title} />

                                </Link>

                            </ul>
                        })
                }
            </article>

        </section>
    )
}

export default Projects