const obj1 = {
    key1: "value1",
    key2: "value2"
};
const obj2 = {
    key3: "value1.1",
    key4: "value2.2"
};

const newsp = { ...obj1, ...obj2 };
console.log(newsp);

const arr1 = { ..."abc" };
console.log(arr1);