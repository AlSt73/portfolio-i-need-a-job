import React, { useEffect, useState } from 'react'
import { showOneProject } from '../../utils/SupabaseMethod'
import { useParams } from 'react-router-dom';
import Loading from '../layout/Loading';

const SingleProject = () => {

    const [project, setProject] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        setTimeout(() => {
            showOneProject(setProject, id);
            setIsLoading(false);
        }, 1000)
    }, [])
    return (
        <div className="main-single-project">
            {isLoading ? <Loading/>
                : project ? (<section className="single-project-container">
                    <h1 className="title">{project.title}</h1>
                    <span className="tool">{project.tools}</span>
                    <p className="description">{project.description}</p>
                    <div className="images-gallery">
                        { project.images ? project.images.map((i,k) => (
                            <>
                                <img key={k} src={i} alt={params.title} />
                            </>
                        )):
                        <Loading/>}
                    </div>

                </section>)
                    :
                    (<h1>No se encontraron datos...</h1>)
            }
        </div>
    )
}

export default SingleProject