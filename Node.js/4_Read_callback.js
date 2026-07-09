const fs = require("fs");

const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");
fs.writeFile(filepath,"utf-8", (err,data) =>{
    if(err) throw err;
   // console.log(data.toString());
    console.log(data);
})
console.log("synchronous code");