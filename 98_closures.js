function outter() {
    function inner() {
        console.log("Heyy Guys");
    }

    return inner;
}

const ans = outter();
console.log(ans);
ans();