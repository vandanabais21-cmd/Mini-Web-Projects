const fs = require("fs");

const path = require("path");



//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");

const data = fs.unlinkSync(filepath);
console.log(data);
console.log("synchronous code");