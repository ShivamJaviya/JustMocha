// Slice Method
// Start delete Insert


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//delete 
const deleteItem = arr1.splice(1, 5);
console.log("delete", deleteItem);
console.log(arr1);
// //insert
const insertItem = arr1.splice(2, 0, 2);
console.log("insert", insertItem);
console.log(arr1);


// //insert and delete
const Item = arr1.splice(7, 2, "20", "30");
console.log("insertion : ", Item);
console.log(arr1);

