const fs = require("fs/promises");
const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");

fs.unlink(filepath)
    .then((data) =>{
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    })
