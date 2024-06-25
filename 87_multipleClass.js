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


}

const user1 = new CreateUser("Neel", 15);
console.log(user1);

const tommy = new dog("tummy,3");
console.log(tommy);
console.log(tummy.is18);
