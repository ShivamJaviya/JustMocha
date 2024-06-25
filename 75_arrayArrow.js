const myfun = {
    firstName: "Shivam",
    age: 20,
    about: () => {
        console.log(`Name is ${this.firstName}.`);
    }
}


myfun.about.call(myfun);