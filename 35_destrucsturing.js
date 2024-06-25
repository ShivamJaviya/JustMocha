const fruits = ["Apple", "Banana", "Lychee", "Watermelon"];
let [myvar1, myvar2, , myvar3] = fruits;

console.log(myvar1); // Apple
console.log(myvar2); // Banana
console.log(myvar3); // Watermelon

const fruits1 = ["Apple", "Banana", "Lychee", "Watermelon"];

let [myvar12, myvar22, ...fruits3] = fruits1;

console.log(myvar12); // Apple
console.log(myvar22); // Banana
console.log(fruits3); // ["Lychee", "Watermelon"]
