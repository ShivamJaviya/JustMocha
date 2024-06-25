function CreateUser(name, age) {
    this.firstname = name;
    this.age = age;
}

CreateUser.prototype.age = function () {
    return `${this.firstname}`;
}



const user1 = new CreateUser("Mahadev", 1000);
const user2 = new CreateUser("Shiav", 5000);
console.log(user1);
console.log(user2);