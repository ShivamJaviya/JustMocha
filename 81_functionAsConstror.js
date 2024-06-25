function sum() {
    console.log("Heyyy Guys");
}

// you can add your own properties
sum.myOwnProperty = "OK";

// Log the property of the sum function
console.log(sum.myOwnProperty);

// Check if sum has a prototype and log the appropriate message
if (sum.prototype) {
    console.log("Prototype");
} else {
    console.log("NOT Prototype");
}

// Add properties to the prototype
sum.prototype.plue = 2;
sum.prototype.summetion = 12;
sum.prototype.opreation = function () {
    return `Bhai Baai `;
};

// Log the prototype of the sum function
console.log(sum.prototype);
console.log(sum.prototype.opreation());