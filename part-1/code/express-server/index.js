var express = require('express')
var app = express()

app.use('/',(req,res)=>{
    res.send("Hello from Express Server")
})

app.listen(4000,()=>{
    console.log("express server listing on port 4000 ")
})