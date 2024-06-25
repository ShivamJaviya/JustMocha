let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
//let array2 = [...array1];
let array2 = array1.slice(0).concat(['20', "30", "40", "50"]);
//let array2 = [].concat(array1);
console.log(array1);
console.log(array2);

let array3 = [...array1, ...array2];

array1.push(9, 10);
console.log(array1 === array2);
console.log(array1);
console.log(array2);
console.log(array3);

