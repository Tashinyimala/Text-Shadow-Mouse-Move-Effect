const name = document.querySelector('.name');
const text = name.querySelector('h1');
const walk = 100;

const shadow = function (event){
    // const width  = name.offsetWidth;
    // const height = name.offsetHeight;

    // Destructuring
    const {offsetWidth: width, offsetHeight: height} = name;
    let {offsetX: x, offsetY: y} = event;

    if (this !== event.target) {
        x += event.target.offsetLeft;
        y += event.target.offsetTop;
    }

    // range 50 to -50
    const xWalk = (x / width * 100) - (walk / 2);
    const yWalk = (y / height * 100) - (walk / 2);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 yellow,
        ${xWalk * -1}px ${yWalk}px 0 red,
        ${xWalk}px ${yWalk * -1}px 0 green
    `;

    console.log(xWalk, yWalk);
     
};

name.addEventListener('mousemove', shadow);
