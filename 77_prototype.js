function creatuser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName},${this.lastName},${this.age},${this.email}`;
    }
    user.is18 = function () {
        return this.age >= 18;
    }

    return user;
}


// function(thst function careat object)
// add key pair
// object ko return krega

const user1 = creatuser("Shivam", "Javiya", '202312029@daiict.ac.in', 20, "Rajkot Bhai");
console.log(user1);
console.log(user1.is18());