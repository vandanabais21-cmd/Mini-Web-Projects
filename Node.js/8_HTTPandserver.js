const http = require("http");  //1 Import the build-in HTTP module.

//2 create the server using http.createServer()
//3 the callback function run every single time a request hits the server
 
const server = http.createServer((req,res) =>{
    //res(resquest): contains info about what the user is asking for(URL ,method)
    //res(response): is the object we just to send data back to the user

    //3 set the response header (status 200 means ok ,content id plain text)

    res.writeHead(200,{"Content-Type":"text/pain"});

    //4 send the actual content and end the respone

    res.end("Hello from the node.js server");
});

const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`server is running and listening on port ${PORT}...`);
});
//browser me localhost:3000

//localhost:3000/about