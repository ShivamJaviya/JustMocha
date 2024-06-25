const myfun = {
    firstName: "Shivam",
    age: 20,
    about: function () {
        console.log(`Name is ${this.firstName}.`);
    }
}

const functions = myfun.about.bind(myfun);
functions();
