var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.get("/",function(req,res){
    res.json({
        "IP address":req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        "Language":req.headers["accept-language"].split(",")[0],
        "Software":req.headers["user-agent"].match(/\((.*?)\)/)[1]
       
    })
})

app.listen(port);