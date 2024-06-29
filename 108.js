const allButtons = document.querySelectorAll(".my-btn");

allButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        // let num = 0;

        // for (let i = 0; i < 1000000000; i++) {
        //     num += i;
        // }
        // console.log(e.currentTarget.textContent, num);
        e.target.style.backgroundColor = "yellow";
        // e.target.Style.color = "white";
    });

});


