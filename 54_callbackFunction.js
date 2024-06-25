function myfun1(value) {
    console.log("inside my function 1");
    console.log(`inside my function ${value}`);
}

function myfun2(callback) {
    console.log("Hello  there i am function and i can ... !!!!");
    callback(5);
} // callback mean myfun1

myfun2(myfun1);

