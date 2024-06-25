function app() {


    const myvalue = "1";


    function inapp() {
        const myvalue = "2";
        console.log("in value", myvalue);
    }
    inapp();
    console.log("outer value", myvalue);


}

app();