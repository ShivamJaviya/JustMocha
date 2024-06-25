const numbers = [1, 2, 3, 4, 4, 5, 5, 5];
console.log(numbers);
console.log(numbers.uniqueElements = new Set(numbers));


// map 
const person = new Map();
person.set('firstName', 'Shivam');
person.set('age', 7);
person.set([1, 2, 3], 'onetwothree');
person.set({ 1: 'one' }, 'onetwothree');
console.log(person);

for (const key of person) {
    console.log(key);
}

for (const [key, value] of person) {
    console.log(key, value);
}