const bucket = ['vegetable', 'salts', 'rice', 'coffee', 'chips'];

const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salts") && bucket.includes("rice")) {
        resolve("friedRice is Done");
    } else {
        reject("Not Completed Promise");
    }
});

// Using the promise
friedRice.then(
    (result) => { console.log("You can eat !!! " + result); }
).catch(
    (error) => { console.log(error); }
);

function myPromise() {
    return new Promise((resolve, reject) => { resolve("foo"); });
}

myPromise().then(
    (result) => {
        console.log(result);
        return result + "bar";
    }
).then(
    (newValue) => { console.log(newValue); }
);
