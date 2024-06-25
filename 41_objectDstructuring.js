const band = {
    bandName: "bhaibhigroup",
    since: 1990,
    kalakar: "naresh kanodiyo",
    "famouse song": "mayar ma man nay lagtu",
};

// Destructuring bandName and since from the band object
let { bandName, since } = band;
console.log(bandName, since); // Output: bhaibhigroup 1990

// Destructuring bandName, since, and the rest of the properties from the band object
let { bandName: name, since: year, ...other } = band;
console.log(name, year, other); // Output: bhaibhigroup 1990 { kalakar: 'naresh kanodiyo', 'famouse song': 'mayar ma man nay lagtu' }
