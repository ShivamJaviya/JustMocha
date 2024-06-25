const person = {
    firstname: "Shivam",
    age: 10,
    about: function () {
        console.log(`Person Name is ${this.firstname} And age is This ${this.age}.`);
    }
}

person.about();


function about() {
    console.log(`Person Name is ${this.firstname} And age is This ${this.age}.`);
}


const person2 = {
    firstname: "Javiya",
    age: 11,
    about: about,
}
const person3 = {
    firstname: "Jayantibhai",
    age: 12,
    about: about,
}

console.log(person2);
console.log(person2.about());
console.log(person3.about());