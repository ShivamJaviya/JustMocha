let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = number.filter((numbers) => {
    return numbers % 2 === 0; // allway filter return value in bool type so and use by return
});

console.log(evenNumber);