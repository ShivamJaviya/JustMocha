const headings = [];

for (let i = 1; i <= 10; i++) {
    headings.push(document.querySelector(`.heading${i}`));
}

for (let index = 1; index <= 10; index++) {
    setTimeout(() => {
        headings[index - 1].textContent = `Text ${index}`;
        headings[index - 1].style.color = "violet";
    }, 1000 * index);
}


function 