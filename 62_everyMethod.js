//every method Apply in wholse element

const arr1 = [2, 4, 6, 8, 10];

const evenNumber = arr1.every((num) => num % 2 === 0);

console.log(evenNumber);

const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Leptop", price: 13000 },
    { productId: 3, productName: "Tablet", price: 14000 },
];

const maxNumber = userCart.every((num) => num.price < 30000);

console.log(maxNumber);