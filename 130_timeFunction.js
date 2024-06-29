console.log("script started");
function hello() {
    console.log("Hello world");
}
setTimeout(hello, 10000);
console.log("script end");

setTimeout(() => {
    console.log("Done");
}, 3000);