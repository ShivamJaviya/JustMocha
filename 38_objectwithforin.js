const person = {
    name: "Shivam Javiya",
    age: 21,
    "my hobbies": ["sport", "movie watching", "cooking"]
};

person.gender = "male";
person["city"] = "Rajkot";


for (let key in person) {

    console.log(`${key} : ${person[key]}`);

}


console.log(Object.keys(person));
