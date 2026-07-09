const fs = require("fs/promises");

const path = require("path");

//let filePath =__dirname + "/" + "song.text";
let filepath = path.join(__dirname, "song.text");
let content = "vandnanananna";
fs.writeFile(filepath, content,{
    flag:"a",//append data to previous file
})
    .then(() => {
        console.log("file created through promise");
    })
    .catch((err)=>{
        console.log(err);
    });

    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    console.log("synchronous code");
    
  