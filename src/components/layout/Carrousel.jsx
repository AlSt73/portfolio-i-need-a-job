import React, { useEffect, useRef, useState } from 'react'
import { showData } from '../../utils/SupabaseMethod'


const Carrousel = () => {
    const [imgs, setImgs] = useState([]);
    let arrows = useRef(null);
    let crImgs = useRef();

    useEffect(() => {
        showData(setImgs);
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
                    {imgs.map(i => (
                        <>

                            <img className="img" src={i.images[2]} alt='img1' />
                        </>
                    ))}

                    {/* <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/clima1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2xpbWExLnBuZyIsImlhdCI6MTY4OTkwMzk0MSwiZXhwIjoxNzIxNDM5OTQxfQ.ruJU6cQiz1Hh72QsKrbaWNXcpdkHchTD7wDDayV83Ig&t=2023-07-21T01%3A44%3A20.904Z' alt='img2' />
                    <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/redsocial5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcmVkc29jaWFsNS5wbmciLCJpYXQiOjE2ODk1NzcyNDksImV4cCI6MTcyMTExMzI0OX0.HHAjijFQl-0--KUND3hLssWo-56xiXGVBlm01PvLsDg&t=2023-07-17T06%3A59%3A22.296Z' alt='img1' />
                    <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/preview2-v2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJldmlldzItdjIucG5nIiwiaWF0IjoxNjg5NTc3OTE4LCJleHAiOjE3MjExMTM5MTh9.tYeGcfsFqc80TiIu5k4r5QiE09PNZJGesJBHnjJ_36E&t=2023-07-17T07%3A10%3A31.972Z' alt='img2' />
                    <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/blogRandom1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmxvZ1JhbmRvbTEucG5nIiwiaWF0IjoxNjg5NTc4NTIwLCJleHAiOjE3MjExMTQ1MjB9.vkx1LGTa_rnT46rJPT97SDzPtFKRUh6GHdszMtqoxzk&t=2023-07-17T07%3A20%3A33.567Z' alt='img2' />
                    <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE0LnBuZyIsImlhdCI6MTY4OTU3NzUzOCwiZXhwIjoxNzIxMTEzNTM4fQ.m6BBMwyKSLGjCLjow0PIzCda5yjEi8e_J36nuXx5x7o&t=2023-07-17T07%3A04%3A12.118Z' alt='img2' />
                    <img className="img" src='https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/proyectoDuna2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJveWVjdG9EdW5hMi5wbmciLCJpYXQiOjE2ODk2MjkxODksImV4cCI6MTcyMTE2NTE4OX0.Hc9bn84Eic3uKu2cinOnNcfIf5k5aT2giHCFu8VrRT8&t=2023-07-17T21%3A25%3A03.474Z' alt='img1' /> */}
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