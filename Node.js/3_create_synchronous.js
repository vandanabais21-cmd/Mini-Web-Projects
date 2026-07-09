const fs = require("fs");
const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");
let content = "hellow form synchronous ";

fs.writeFileSync(filepath,content);


    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");