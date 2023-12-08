console.log("Hello World")
console.log("Hello World")

const http = require("http")

const server = http.createServer((req,res)=> {
    // req.url --> gives the route we are requesting
    // console.log(req.url)
    // res.end("<h1>This the biggest U gonna get!</h1>");

    if (req.url === "/about"){
        res.end("<h1>AA gaye about pe</h1>");
    } 
    else if (req.url === "/") {
        res.end("<h1>AA gaye Home pe</h1>");
    } 
    else if (req.url === "/contact"){
        res.end("<h1>AA gaye contact pe</h1>");
    } 
    else {
        res.end("<h1>Ye nhi milega yaha pe</h1>");
    } 
});

server.listen(5000, ()=>{
    console.log("Server is working")
})