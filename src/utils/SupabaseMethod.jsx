import { supabase } from '../api_connection/connection';
export const insertData = async () => {

    // const { error } = await supabase
    //     .from('projects')
    //     .insert([
    //         {
    //             title: "Pagina random y API de Rick & Morty",
    //             description: "Este es un breve proyecto que muestra datos de la API de Rick and Morty, junto con un mini blog de películas aleatorias donde puedes enviar solicitudes de películas. El propósito de este proyecto fue practicar las consultas desde el cliente al servidor, utilizando métodos GET y POST. Las tecnologías utilizadas en este proyecto fueron JavaScript vanilla, Mysql, CSS y HTML.",
    //             tools: "Javascript - CSS - HTML - MYSQL",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/apiRick.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYXBpUmljay5wbmciLCJpYXQiOjE2OTAxNTI3MzAsImV4cCI6MjAwNTUxMjczMH0.Zbm0X46s7Jx6cExaWwj9wWVrh8yIpwhBHoI-FZIj4hA", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/apiRick2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYXBpUmljazIucG5nIiwiaWF0IjoxNjkwMTUyNzMyLCJleHAiOjIwMDU1MTI3MzJ9.XPnwnM5z7Q9AP1VHn58TA3-NhVp4FMp-OAeAL-DS5Po", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/apiRick3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYXBpUmljazMucG5nIiwiaWF0IjoxNjkwMTUyNzM1LCJleHAiOjIwMDU1MTI3MzV9.m2_53oPN1l01dqYBwMqYCbAXqe0ID5g_UvbBEVCH4Lc", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/apiRick4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYXBpUmljazQucG5nIiwiaWF0IjoxNjkwMTUyNzQ1LCJleHAiOjIwMDU1MTI3NDV9.PZxKl47weHH8GwrfNI6UMSmyx48c0D51g9Gho-2nNNY"],
    //         },
    //         {
    //             title: "Blog de películas",
    //             description: "Pequeño blog de películas que consume una API creada por mí. En este blog, puedes ver todos los artículos de películas creadas, generar tu propio artículo con su respectiva imagen si así lo deseas, modificar el artículo desde su título hasta su imagen, buscar un artículo específico y eliminar dicho artículo si es necesario. El propósito de este proyecto fue practicar con un CRUD las consultas AJAX, aplicando sus métodos GET, PUT, DELETE y POST, además de comprender el funcionamiento de un backend y cómo conectarlo al frontend. Las tecnologías utilizadas para el frontend en este proyecto fueron React con JavaScript y CSS y para la construcción de la API se utilizaron Node.js, Express y MongoDB.",
    //             tools: "React - Javascript - CSS - MongoDB - NodeJs - Express",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/blogRandom1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmxvZ1JhbmRvbTEucG5nIiwiaWF0IjoxNjkwMTUyNzI2LCJleHAiOjIwMDU1MTI3MjZ9.XUaccFQZxlJaaLyOnaVT04F2Bo757Gr2XfptJQb3Ldo", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/blogRandom2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmxvZ1JhbmRvbTIucG5nIiwiaWF0IjoxNjkwMTUyNzUwLCJleHAiOjIwMDU1MTI3NTB9.0x3MGlMK2StrjiBeP24u8aFtwayr4uVvyRZBsXNRPos", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/blogRandom3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmxvZ1JhbmRvbTMucG5nIiwiaWF0IjoxNjkwMTUyNzI0LCJleHAiOjIwMDU1MTI3MjR9.Yh0qCGNZGekfR2XTe-ZskVFh7s98tn4Ymh3twfNO2C0", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/blogRandom4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmxvZ1JhbmRvbTQucG5nIiwiaWF0IjoxNjkwMTUyNzUzLCJleHAiOjIwMDU1MTI3NTN9.c7uUKCB9qFVXPR-dwejhVJNvFrTbX0UifB6p3LeAty4"],
    //         },
    //         {
    //             title: "Carrito de compras, generador de colores y menú de comida - 18 de septiembre.",
    //             description: "Este es un proyecto enfocado puramente en el frontend, donde se diseña un mini carrito de compras con interacciones para agregar o quitar la cantidad de productos y limpiar el carrito de compras. Además, incluye otro mini proyecto que permite generar colores aleatorios en formato hexadecimal y colores primarios. El objetivo de este proyecto fue practicar la responsividad y el diseño. Las tecnologías utilizadas fueron JavaScript, CSS y HTML.",
    //             tools: "Javascript - CSS - HTML",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/carritoCompra3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2Fycml0b0NvbXByYTMucG5nIiwiaWF0IjoxNjkwMTUyNTA3LCJleHAiOjIwMDU1MTI1MDd9.f-7sTEikCR2hBy0sOq9Ko_qVE8096mKN7QjkmR-53uU", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/carritoCompra1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2Fycml0b0NvbXByYTEucG5nIiwiaWF0IjoxNjkwMTUyNzYzLCJleHAiOjIwMDU1MTI3NjN9.HsdoQQbiHxvmZuJUGnz_NByJW5hceTvYdqqfmZNa2yM", "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/carritoCompra2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2Fycml0b0NvbXByYTIucG5nIiwiaWF0IjoxNjkwMTUyNDk1LCJleHAiOjIwMDU1MTI0OTV9.eKUMwXlo69P9X_MnvCMPs-0KX9rv90XZ_ZEgV4LUGlU",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/changeColor1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2hhbmdlQ29sb3IxLnBuZyIsImlhdCI6MTY5MDE1MjUxMywiZXhwIjoyMDA1NTEyNTEzfQ.-Ox5LF_ASgzsLc154_VJWnOYOq4lENevTrgT3FkQaxc",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/changeColor2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/menuComida1.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/menuComida2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/menuComida3.png?t=2023-07-26T02%3A41%3A23.567Z"]
    //         },
    //         {
    //             title: "App Clima",
    //             description: "En este proyecto, he construido una mini aplicación que muestra el clima según una zona geográfica ingresada. Mediante la llamada a la API de OpenWeatherMap, se presentan los pronósticos de cinco días, incluyendo la temperatura máxima y mínima para cada hora. El propósito de esta app fue practicar el diseño de la interfaz y obtener información de una API externa para mostrarla posteriormente al usuario. Las tecnologías utilizadas para este proyecto fueron React, JavaScript, CSS y HTML.",
    //             tools: "React - Javascript - CSS - HTML",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/clima3.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/clima1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2xpbWExLnBuZyIsImlhdCI6MTY5MDE1MjUxOCwiZXhwIjoyMDA1NTEyNTE4fQ.gs2a8-Fhl3lA97GbWXaD-s_Q2V7bwWC1DRQ2r10fS0s",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/clima2.png"]
    //         },
    //         {
    //             title: "BiblioRed",
    //             description: "Este proyecto tiene como objetivo generar mayor alcance a los ciudadanos que quieren solicitar libros en sus municipalidades, en plena pandemia. El fin fue evitar que los ciudadanos salieran de sus casas a pedir libros, ya que en plena pandemia era muy dificil salir de sus hogares. Se ideo un portal para solicitar o reservar libros a domicilio y prescencial. Ademas de facilitar la carga de trabajo a los empleados de la municipalidad. Este fue un proyecto muy importante para mi ya que tiene un carga social y solidaria. Las tecnologías frontend utilizadas para este proyecto fueron React, JavaScript, CSS y HTML. y para el backend fue nodejs, express, postgres",
    //             tools: "React - Javascript - CSS - HTML - NodeJs - Express - Postgress ",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWExLnBuZyIsImlhdCI6MTY5MDE1MjUyNCwiZXhwIjoyMDA1NTEyNTI0fQ.hYxhJAZKxGB_JaoCGOD96NxFCfuS0bwyeUhh1Bn0ZHc",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWEyLnBuZyIsImlhdCI6MTY5MDE1MjUyMSwiZXhwIjoyMDA1NTEyNTIxfQ.yTvuqGipcHtpxkzlZl7TJx0pJGfP687-_8B1CXQMFzM",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWEzLnBuZyIsImlhdCI6MTY5MDE1MjUyNywiZXhwIjoyMDA1NTEyNTI3fQ.eT3W8iMfpQZpy3P-rUfq4n0AbqLTZXcwBzmsln4Dm1A",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE0LnBuZyIsImlhdCI6MTY5MDE1MjUzMCwiZXhwIjoyMDA1NTEyNTMwfQ.IUBq-ZWO1Xaw7wHiDN9Q1jPZv0Zw_l1M12O3fPE1YL8",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE1LnBuZyIsImlhdCI6MTY5MDE1MjUzNCwiZXhwIjoyMDA1NTEyNTM0fQ.FXSSH2oIFRzDobRZTB66-XCi7QCT5yd0eB9bDG_Mq0I",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE2LnBuZyIsImlhdCI6MTY5MDE1MjU0NiwiZXhwIjoyMDA1NTEyNTQ2fQ.TdFPJaQXOMst3D8l2MxY2_ojHN3Up91rv25Up36GpIM",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE3LnBuZyIsImlhdCI6MTY5MDE1MjU1MSwiZXhwIjoyMDA1NTEyNTUxfQ.g7TJfzncSVAElyt5elKu7C5nUtSHfYtJ3lm83Y1omFk",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/sign/images/libreria8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlicmVyaWE4LnBuZyIsImlhdCI6MTY5MDE1MjU3MiwiZXhwIjoyMDA1NTEyNTcyfQ.XzE5G3NizZdT9v-Fw-kGF6c344GpAOu0_OZhmv0MLFg"]
    //         },
    //         {
    //             title: "Mini juego memorizar cartas",
    //             description: "El proyecto Memorizar Cartas - Dead by Daylight Edition es una emocionante y desafiante aplicación de juego de memoria inspirada en el popular juego Dead by Daylight En esta versión, los jugadores se sumergirán en un emocionante mundo temático donde deberán enfrentarse a un tablero de cartas misteriosas que representan a los icónicos personajes y elementos del juego Dead by Daylight. El diseño de la interfaz de usuario se ha adaptado al mundo oscuro y misterioso de Dead by Daylight, con animaciones y efectos visuales que sumergirán a los jugadores en una atmósfera inmersiva mientras juegan. El juego no cuenta con un límite de tiempo, permitiendo a los jugadores tomarse su tiempo para planificar sus movimientos y ejercitar su memoria.",
    //             tools: "React - Javascript - CSS - HTML  ",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/preview3-v2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/preview2-v2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/preview4-v2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/preview1-v2.png"],
    //         },
    //         {
    //             title: "Blog proyecto duna",
    //             description: "En este proyecto se realiza una pequeña web con enfoque de blog. El fin de este proyecto fue mejorar el diseño con la maquetación mediante CSS y HTML.",
    //             tools: "Javascript - CSS - HTML  ",
    //             images: ["https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/proyectoDuna1.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/proyectoDuna2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/proyectoDuna3.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/proyectoDuna4.png"],
    //         },
    //         {
    //             title: "Mini red social - tipo twitter",
    //             description: "Mini Red Social - Tipo Twitter es una emocionante y compacta aplicación que agarra la esencia de Twitter en un formato más reducido. Los usuarios podrán compartir mensajes cortos, seguir a otros usuarios y editar su perfil. La interfaz intuitiva y amigable ofrece una experiencia de red social fluida y dinámica. Esta mini red social ofrece una experiencia más simple a Twitter en un formato más ágil y accesible. ¡Únete a la comunidad y comparte tus pensamientos e ideas en esta plataforma de microblogging!",
    //             tools: "React - Javascript - CSS - HTML - Nodejs - Express - MongoDb  ",
    //             images: [
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/redsocial4.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/redsocial5.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/redsocial3.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/redsocial2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/redsocial1.png",]
    //         },
    //         {
    //             title: "Web review de películas",
    //             description: "ReviewPelículas es un proyecto web donde los usuarios pueden agregar reseñas de películas y series, buscarlas por nombre y ver todas las reviews existentes. La plataforma ofrece una experiencia sencilla y atractiva para compartir opiniones sobre producciones audiovisuales y descubrir nuevas recomendaciones. ¡Únete y comparte tus pensamientos sobre tus películas y series favoritas en esta comunidad de críticas cinematográficas!",
    //             tools: "React - Javascript - CSS - HTML - Nodejs - Express - MongoDb  ",
    //             images: [
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/reviews1.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/reviews2.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/reviews3.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/reviews4.png",
    //                 "https://ykrvbqyufggkpouwaogp.supabase.co/storage/v1/object/public/images/reviews5.png",]
    //         }
    //     ])
    //     .select()
}

//DELETE DATA
export const deleteData = async () => {
    // const { error } = await supabase
    //     .from('projects')
    //     .delete()
    //     .lte('id', '148')
}

//select *
export const showData = async (setAllData) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')

    setAllData(data);
}