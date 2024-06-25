const userMethods = {

    about: function () {
        return `${this.firstName} is ${this.age} old`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return `sare gama padhanisa`;
    }

}

function creatuser(firstName, lastName, email, age, address) {
    const user = Object.create(creatuser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;

    return user;
}

creatuser.prototype.about = function () {
    return `Person is ${this.firstName} and He/She Age is ${age}.`
}

creatuser.prototype.is18 = function () {
    return this.age >= 18;
},
    creatuser.prototype.sing = function () {
        return `sare gama padhanisa`;
    }


const user1 = creatuser("Shivam", "Javiya", '202312029@daiict.ac.in', 20, "Rajkot Bhai");
const user2 = creatuser("Svam", "Jaya", 'ok', 21, "Rajkot ");

console.log(creatuser.prototype);
console.log(user1.is18());
console.log(user1.sing);

