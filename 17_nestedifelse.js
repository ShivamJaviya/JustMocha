let num1 = 10;
let usernum = +prompt("Enter your Number");
if (num1 === usernum) {
    console.log("Your guess right");
}
else {
    if (num1 < usernum) {
        console.log("Your guess too high");
    }
    else {
        console.log("Your guess too low");
    }
}