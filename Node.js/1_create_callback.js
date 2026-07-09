const fs = require('fs');//reqiure me ka matlab kisi bhi cheez ki ye nikal ke dega jo hame cahhiye
const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");
let content = "hhhhhhhhhhhhhhhhh";

//to kya the path upto your parent folder
fs.writeFile(filepath, content, (err) =>{
    if(err) throw err;
    console.log("File created!");
});