class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get fullname() {
        return `${this.name} and ${this.age}`;
    }
}

const person1 = new person("Shivam", 20);
console.log(person1.fullname);