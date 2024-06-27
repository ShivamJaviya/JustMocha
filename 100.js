function numbers(power) {
    return function (number1) {
        return number1 ** power;
    }
}
const myfunction = number => power => number ** power;

const square = numbers(2);
const ans = square(2);
console.log(ans);



const cude = myfunction(2);
const ans2 = cude(3);
console.log(ans2);