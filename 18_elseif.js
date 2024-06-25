let num1 = 10;
let usernum = +prompt("Enter your Number");
if (num1 === usernum) {
    console.log("Your guess right");
}
else if (usernum < 20 && usernum > 10) {
    console.log("Your guess is near by");
}
else if (usernum < 50 && usernum > 20) {
    console.log("Your guess high");
}
else if (usernum < 100 && usernum > 50) {
    console.log("Your guess too high");
}
else if (usernum < 0 || usernum < 5) {
    console.log("Your guess is too low");
}
else if (usernum > 5 && usernum < 9) {
    console.log("Your guess low");
}
else if (usernum <= 9) {
    console.log("Your guess nearly low");
}
else {
    console.log("Your guess too high");
}