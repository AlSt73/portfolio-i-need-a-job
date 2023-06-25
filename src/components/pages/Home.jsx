import React, { useEffect, useRef, useState } from 'react'
import bg from "../../assets/imgs/bg.jpg";

const Home = () => {

  const [data, setData] = useState(
    ['Hello world.',
      "I am Benjamin Soto",
      "Hola mundo.",
      'Soy Benjamín Soto']);
  const [dataColors, setDataColors] = useState(['#9ae06f', '#b998df', '#78abc8']);
  const title = useRef(null);
  const console = useRef(null);

  useEffect(() => {
    consoleText(data, title, dataColors)
  }, [title])

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = console.current;
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = id.current;
    target.setAttribute('style', 'color:' + colors[0])
    setInterval(() => {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.textContent = words[0].substring(0, letterCount)
        setTimeout(() => {
          var usedColor = colors.shift();
          colors.push(usedColor);

          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.textContent = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'

        visible = true;
      }
    }, 400)
  }


  return (
    <section className="home-content">
      <article className="intro">
        <h1 className="title" ref={title}> </h1>
        <h1 ref={console} className="console-underscore">_</h1>

        {/* <p>& <br /> Soy ingeniero informatico enfocado en el desarrollo web.  </p> */}
      </article>
      <div className="mask">
        <div className="image">
          <img src={bg} alt="bg" />
        </div>
      </div>
    </section>
  )
}

export default Home