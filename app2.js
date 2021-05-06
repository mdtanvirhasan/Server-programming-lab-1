const http = require('http');
const pages = require("./loadContents");

const idServer = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write(pages.index);
    }
    else if(req.url=='/about'){
        res.write(pages.about);
    }
    else if(req.url=='/blog'){
        res.write(pages.blog);
    }
    else if(req.url=='/contact'){
        res.write(pages.contact);
    }
    else if(req.url=='/index'){
        res.write(pages.index);
    }
    else if(req.url=='/pricing'){
        res.write(pages.pricing);
    }
    else if(req.url=='/services'){
        res.write(pages.services);
    }
    else if(req.url=='/work'){
        res.write(pages.work);
    }
    else{
        res.write("page doesn't exist.")
    }
    res.end();
});

idServer.listen(2121);