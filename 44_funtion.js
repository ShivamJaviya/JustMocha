function check(user) {

    if (user % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("odd");
    }

}


let user = prompt("Enter Your Value for Checking ODD / EVEN");
check(user);

