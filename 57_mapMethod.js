
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const square = function (number) {

    return number * number;
}

const squareNumber = number.map(square);
console.log(squareNumber);


const squareNumber2 = number.map((number, index) => {
    return `index ${index}: ${number * number}`;
})

console.log(squareNumber2);


const names = ["abc", "bcd", "zxc", "bnm", "jkl", "uio"];

const justName = names.map((user) => {
    // console.log(`User Name : ${names}`); 
    return `${names}`; // allway geting use in array way
})

console.log(justName);
