const fruits = ["Apple", "Banana", "Lychee", "Watermelon"];
const fruits2 = [];
for (let i in fruits) {
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);