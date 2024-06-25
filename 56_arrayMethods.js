//Array methos :
// 1. forEcha
// 2. map
// 3. filter
// 4. reduce 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myfun1(number, index) {
    console.log(`index is ${index} and number is ${number}`);
}

// for (let i = 0; i < number.length; i++) {
//     myfun1(number[i], i);
// }

number.forEach(myfun1);


number.forEach(function (number, index) {
    console.log(`index is ${index} and number is ${number}*2 = ${number * 2}.`);
});


const users = [
    { firstname: "Shivam Javiya", age: 21 },
    { firstname: "Om Javiya", age: 22 },
    { firstname: "Neel Javiya", age: 23 },
    { firstname: "Keval Javiya", age: 24 },
    { firstname: "Jayantibhai Javiya", age: 25 },
]

// users.forEach(function (user) {
//     console.log(`User Name : ${user.firstname} and Age : ${user.age}`);
// })

users.forEach(user => {
    console.log(`User Name : ${user.firstname} and Age : ${user.age}`);
})

// for (let user of users) {
//     console.log(`User Name : ${user.firstname} and Age : ${user.age}`);
// }

