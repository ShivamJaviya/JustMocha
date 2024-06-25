const obj1 = {
    key1: "value1",
    key2: "value 2"
}

const obj2 = {};
obj2.key3 = "value = 3";

console.log(obj2.key3);

const obj3 = Object.create(obj1);
// obj3.key2 = "value = 2";

console.log(obj3.key2);
console.log(obj3.key1);
console.log(obj3);