class CreateUser {
    constructor(firstname, email, age, add) {
        this.firstname = firstname;
        this.email = email;
        this.age = age;
        this.add = add;
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

const user1 = new CreateUser("Neel", "dj30", 15, "Rajkot");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.singer());
