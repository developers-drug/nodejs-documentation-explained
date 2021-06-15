var http = require('http')

var server = http.createServer((req,res)=>{
    console.log("request url is ", req.url)
    switch(req.url){
        case '/':   res.writeHead(200,{'Content-Type':'text/html'})
                    res.end('Hello from HTTP Server')
                    break;
        default:    res.writeHead(200,{'Content-Type':'text/html'})
                    res.end('Hello from HTTP Server default route')
                    break;
    }
})

server.listen(4001,()=>{
    console.log("http server is listing on port 4001")
})