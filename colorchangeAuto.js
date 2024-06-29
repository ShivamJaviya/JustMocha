const body = document.body;

setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const yellow = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${blue},${yellow})`;
    console.log(rgb);
    body.style.background = rgb;
}, 1000);
