const key1 = "mykey1";
const key2 = "mykey2";

const value1 = "Myvalue1";
const value2 = "Myvalue2";

// Using literal property names
const obj1 = {
    key1: value1,
    key2: value2
};

console.log(obj1);
// Output: { key1: 'Myvalue1', key2: 'Myvalue2' }

// Using computed property names
const obj2 = {
    [key1]: value1,
    [key2]: value2
};

console.log(obj2);
// Output: { mykey1: 'Myvalue1', my

const obj3 = {};
obj3[key1] = value1;
obj3[key2] = value2;
console.log(obj3);

