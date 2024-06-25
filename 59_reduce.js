const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Add the initial value 0

// accumulator             currentValue                return
// 0                              1                        1
// 1                              2                        3
// 3                              3                        6
// 6                              4                        10
// 10                              5                       15
// 15                              -

console.log(sum); // Output: 15

const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Leptop", price: 13000 },
    { productId: 3, productName: "Tablet", price: 14000 },
];

const total = userCart.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.price;
}, 0);

console.log(total); // Output: 39000
