function myfun() {
    let val = 0;
    return function () {
        if (val < 1) {
            console.log("function hase been created");
            val++;
        }
        else {
            console.log("Function already called");
        }
    }
}


const fun = myfun();
fun();
fun();

const fun2 = myfun();
fun2();
fun2();
fun2();