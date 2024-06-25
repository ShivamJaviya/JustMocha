class Animal {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }

    about() {
        return `${this.firstname}`;
    }

    is18() {
        return this.age > 18;
    }

    singer() {
        return "lalal";
    }
}

class Dog extends Animal {
    eat() {
        return `Modified Eat : ${this.firstname} is eating.`;
    }

    run() {
        return `This is ${this.firstname} and ${this.age}.`;
    }
}

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.is18());
console.log(tommy.eat());
console.log(tommy.run());
