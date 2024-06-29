const URL = "https://jsonplaceholder.typicode.com/posts";
const xml = new XMLHttpRequest();
console.log(xml);

// Step - 1: declare URL
xml.open("GET", URL);

xml.onreadystatechange = function () {

    const response = xml.response;
    const data = JSON.parse(response);
    console.log(data);

};

xml.send();


