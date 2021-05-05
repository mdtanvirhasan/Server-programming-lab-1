const http = require('http');

const server = http.createServer((req,res)=>{
    //res.writeHead(201,{"Content-Type": "text/html"})
    //res.write("<h1>Hello</h1>");
    //res.end("<h1>Hello</h1>");

    if(req.url=='/'){
        res.write("<h1>this is base url.</h1>");
        res.end();
    }
    else if(req.url=='/home'){
        res.write("<h1>this is home Page.</h1>");
        res.end();
    }
    else {
        res.write("<h1>this doesn't exist.</h1><br><a href ='/'>go to base</a>");
        res.end();
    }
});

//server.listen(7777);

module.exports = { server };

