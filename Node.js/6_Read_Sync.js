const fs = require("fs");

const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");

 const data = fs.readFileSync(filepath,"utf8");

 console.log(data);

console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
//delete operation in node .js

