const myfun = {
    firstName: "Shivam",
    age: 20,
    hobbies: "guitar",
    favsinger: "Arijit Singh",
    about: function (hobbies = this.hobbies, favsinger = this.favsinger) {
        console.log(`Name is ${this.firstName} and Age is ${this.age}, Hobbies: ${hobbies}, Favorite Singer: ${favsinger}`);
    }
}

const myfun2 = {
    firstName: "Neel",
    age: 10,
}

// Call the `about` method of `myfun` with the context of `myfun2`
//myfun.about.call(myfun2, "guitar", "Guru Randhawa");
myfun.about.call(myfun2); // Use myfun2 context without passing additional arguments
myfun.about(); // Use myfun context without passing additional arguments


const func = myfun.about.bind(myfun2, "guitar", "Guru Randhawa");
func(); // Call the bound function