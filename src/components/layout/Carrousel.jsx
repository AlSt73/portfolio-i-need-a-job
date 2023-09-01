import  { useEffect, useRef, useState } from 'react'
import { showData } from '../../utils/SupabaseMethod'
import Loading from './Loading';


const Carrousel = () => {
    const [imgs, setImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let arrows = useRef(null);
    let crImgs = useRef();

    useEffect(() => {
        setTimeout(() => {
            showData(setImgs);
            setIsLoading(false);
        }, 1000)
    }, [])

    const arrowsSelected = (e) => {
        let listItems = arrows.current.querySelectorAll('i');
        let operation;
        let p = 0;
        listItems.forEach((item, i) => {
            listItems[i].classList.remove('fa-solid');
            listItems[i].classList.add('fa-regular');
            if (e.target == item) {
                p = i;
            }

        })
        p = parseInt(p);
        operation = (p * (-32));
        crImgs.current.style.transform = `translateX(${operation}%)`;
        console.log("valor->" + operation);
        console.log("valor2->" + p);
        listItems[p].classList.add('fa-solid');


    }


    return (
        <section className="middle-content">

            <div className="carrousel">
                <div className="cr-imgs" ref={crImgs}>
                    {isLoading ?

                        <div className="loading-cr">

                            <Loading />
                        </div>
                        : imgs ? imgs.map((i, k) => (

                            <img key={k} className="img" src={i.images[2]} alt='img1' />

                        ))
                        :
                        <h1>no hay imgs</h1>
                        }


                </div>
                <ul className="arrows" ref={arrows}>
                    <li onClick={(e) => arrowsSelected(e)}><i className="fa-solid fa-circle"></i></li>
                    <li onClick={(e) => arrowsSelected(e)}><i className="fa-regular fa-circle"></i></li>
                    <li onClick={(e) => arrowsSelected(e)}><i className="fa-regular fa-circle"></i></li>
                </ul>
            </div>
            <div className="txt-intro">
                <p>
                    ¡Hola! Soy Benjamín Soto, un apasionado ingeniero informático de Concepción, Chile. Desde que descubrí mi amor por la programación, me he dedicado al emocionante mundo del desarrollo web. Me siento cómodo utilizando lenguajes como C#, JavaScript y PHP para crear soluciones digitales y dar vida a ideas en línea.
                    La posibilidad de convertir líneas de código en aplicaciones web funcionales y atractivas es lo que me motiva cada día. Me gusta enfrentar desafíos y superar obstáculos para entregar resultados de calidad. Siempre me mantengo actualizado sobre las últimas tendencias en desarrollo web, ya que considero que es fundamental estar al tanto de las nuevas tecnologías y enfoques para brindar la mejor experiencia al usuario.
                    Mi objetivo principal es mejorar la vida de las personas a través de la tecnología. Creo firmemente en la importancia de crear aplicaciones web intuitivas, eficientes y atractivas que faciliten la interacción y resuelvan problemas del mundo real. Me emociona la idea de contribuir al crecimiento de la web y de la industria digital en general.
                    En resumen, soy un joven ingeniero informático entusiasta, dedicado al desarrollo web y comprometido con la entrega de soluciones digitales de calidad. Me encanta explorar nuevas formas de hacer las cosas y siempre estoy listo para aprender y mejorar. ¡Estoy emocionado de seguir construyendo mi carrera y dejar mi huella en el mundo del desarrollo web!

                </p>
            </div>
        </section>

    )
}

export default Carrousel