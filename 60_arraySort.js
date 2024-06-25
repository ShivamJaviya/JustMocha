const arr1 = [112, 234, 56, 789, 1230];

arr1.sort((a, b) => a - b);
console.log(arr1);

let sortarr = arr1.sort((a, b) => b - a);
console.log(sortarr);

console.log(arr1.sort());  //aski value base on that sorting 


const userCart = [
    { productId: 1, productName: "Mobile", price: 120000 },
    { productId: 1, productName: "Mobile", price: 1200000 },
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Leptop", price: 13000 },
    { productId: 3, productName: "Tablet", price: 14000 },
];

userCart.sort((a, b) => a.price - b.price);
console.log(userCart);
