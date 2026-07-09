const fs = require("fs/promises");

const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");

fs.unlink(filepath, (err) =>{
    if(err) throw err;
    console.log("file deleted through callback");
});