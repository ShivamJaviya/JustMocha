const userCart = [
    { productId: 1, productName: "Mobile", price: 120000 },
    { productId: 1, productName: "Mobile", price: 1200000 },
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Leptop", price: 13000 },
    { productId: 3, productName: "Tablet", price: 14000 },
];

userCart.sort((a, b) => a.price - b.price);
console.log(userCart);


const p1 = userCart.find((user) => user.productId === 1);
console.log(p1);