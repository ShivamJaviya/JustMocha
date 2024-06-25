function calculate(number1, number2) {

    function add(number1, number2) {
        return number1 + number2;
    }

    function sub(number1, number2) {
        return number1 - number2;
    }

    function mal(number1, number2) {
        return number1 * number2;
    }

    function div(number1, number2) {
        return number1 / number2;
    }


    console.log(add(number1, number2));
    console.log(sub(number1, number2));
    console.log(mal(number1, number2));
    console.log(div(number1, number2));
}

let number1 = 10;
let number2 = 20;
calculate(number1, number2);