//function retuning function

function myfun1() {
    function inside() {
        return "This is Inside function";
    }
    return inside;
}

const result = myfun1();
console.log(result());

