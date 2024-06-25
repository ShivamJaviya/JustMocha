const fruits = ["Apple", "Banana", "Lychee", "Watermelon"];
//fruits = ["Orange"]; // error
fruits.push("Orange");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}
