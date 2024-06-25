const sum = number => {
    let i = 0;
    let total = 0; // Initialize total to 0

    while (i <= number) {
        total = total + i;
        i++; // Increment i to avoid infinite loop
    }

    return total;
}

const check = number => number % 2 === 0; // Check if number is even

let user = 10;
let result = sum(user);
console.log(result); // Log the sum of numbers from 0 to user
console.log(check(user)); // Log whether the user number is even
