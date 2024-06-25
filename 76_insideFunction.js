const myfun = {
    firstName: "Shivam",
    age: 20,
    about: function () {
        console.log(`Name is ${this.firstName}.`);
    }
}


const myfun1 = {
    firstName: "Shivam",
    age: 20,
    about() {
        console.log(`Name is ${this.firstName}.`);
    }
}


myfun.about();
myfun1.about();