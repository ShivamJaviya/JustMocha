const student = [
    { sid: 1, sname: "okbhai", std: 5 },
    { sid: 2, sname: "Shivambhai", std: 7 },
    { sid: 3, sname: "Neelbhai", std: 8 },
    { sid: 4, sname: "kevalbhai", std: 9 },
]
let [{ sid }, , { sname }] = student;
console.log(student);
console.log(sid);
console.log(sname);
