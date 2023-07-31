export let data = ["Hello world", "I'm Benjamin", "Hola mundo", "Soy Benjamín"];
export let colors = ['#6fbee0', '#47b1df', '#78abc8', "#26a5db"];

export function ConsoleText(words, colors, title, console) {
    if (colors === undefined) colors = '#fff';
    var visible = true;
    var con = console.current;
    var target = title.current;
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    let intervalId;
    let intervalId2;

    target.setAttribute('style', 'color:' + colors[0]);

    if (!intervalId) {

        clearInterval(intervalId);
        clearInterval(intervalId2);
    }

    intervalId = setInterval(() => {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.textContent = words[0].substring(0, letterCount)
            setTimeout(() => {
                var usedColor = colors.shift();
                colors.push(usedColor);

                let usedWord = words.shift();
                words.push(usedWord);


                x = 1;
                target.setAttribute('style', 'color:' + colors[1]);
                target.style.transition = 'all 0.7s ease';

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
    intervalId2 = setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)


}