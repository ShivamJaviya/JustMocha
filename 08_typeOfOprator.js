// Data Type : PRIMITIVE TYPE
// int
// string
// booles
// undefined
// bigint
// Symbol


let age = 21;
console.log(typeof age);

let age1 = "21";
console.log(typeof age1);
//console.log(typeof +age1); string to number

// change mode of number to string
age = age + "";
console.log(typeof age);

//change mode of string to number
age = + "age"
console.log(typeof age);
age = String(age);//number to string 
console.log(typeof age);

age = Number(age);//string to number 
console.log(typeof age);