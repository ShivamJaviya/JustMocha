const userMethods = {

    about: function () {
        return `${this.firstName}is ${this.age} old`;
    },
    is18: function () {
        return this.age >= 18;
    }

}

function creatuser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}


// function(thst function careat object)
// add key pair
// object ko return krega

const user1 = creatuser("Shivam", "Javiya", '202312029@daiict.ac.in', 20, "Rajkot Bhai");
const user2 = creatuser("Svam", "Jaya", 'ok', 21, "Rajkot ");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user2.about());
console.log(user2);