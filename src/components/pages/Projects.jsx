import React, { useEffect, useState } from 'react'
import { showData } from '../../utils/SupabaseMethod'

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
            <h1>Proyectos</h1>
            <article className="project-list">
                {
                    isLoading ? <h1>Cargando...</h1> :
                        projects.map(p => {
                            return <ul key={p.id}>
                                <img src={p.images[0]} alt={p.title} />

                            </ul>
                        })
                }
            </article>

        </section>
    )
}

export default Projects