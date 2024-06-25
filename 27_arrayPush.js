let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let size = numbers.length;

// Use a new array to store the squared values
let newNumbers = [];

for (let i = 0; i < size; i++) {
    newNumbers.push(numbers[i] ** 2); // Push the square of the current element to newNumbers
}

// Now update the original numbers array to match the newNumbers array
for (let i = 0; i < size; i++) {
    numbers.pop(); // Remove the last element until the array is empty
}
for (let i = 0; i < size; i++) {
    numbers.push(newNumbers[i]); // Push the squared values back to numbers
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}





let mix = ["Apple", "Banana", "lychee", "Grapes", "Watermelon"];
mix.unshift("Orange"); //unshift  one type of push
for (let i = 0; i < mix.length; i++) {
    console.log(mix[i]);
}

mix.shift(); // one type of pop function 
mix.shift();
mix.shift();

for (let i = 0; i < mix.length; i++) {
    console.log(mix[i]);
}
