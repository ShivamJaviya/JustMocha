const arr1 = [2, 4, 6, 8, 10];
const ans = arr1.some((number) => number % 2 === 1);
console.log(ans);


const userCart = [
    { productId: 1, productName: "Mobile", price: 120000 },
    { productId: 1, productName: "Mobile", price: 1200000 },
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Leptop", price: 13000 },
    { productId: 3, productName: "Tablet", price: 14000 },
];

const checkprice = userCart.some((num) => num.price > 10000000);

console.log("More Then 10 Lakh Value is ", checkprice);