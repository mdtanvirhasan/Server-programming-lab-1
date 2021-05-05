//synchronous and asynchronous Function


//readfile
//writefile
//appendfile
//delete
//rename

const fs = require("fs");

fs.readFileSync
fs.readFile

//fs.writeFileSync('./contents/demoFile.txt','we are learning NodeJs.');
//fs.appendFileSync('./contents/demoFile.txt','we are learning NodeJs.');

/*fs.rename("./contents/RenamedFile.txt","./contents/RenamedFile2.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Rename Successful");
    }
});
*/

/*console.log("before");


fs.readFile("./contents/RenamedFile2.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.appendFileSync("./contents/RenamedFile2.txt","Is this a synchronous process?",
            (err)=>{
                console.log(err);
            }
        );
        fs.readFile("./contents/RenamedFile2.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        });




        
    }
});

console.log("after");

*/

fs.unlink("./contents/RenamedFile2.txt",(err)=>{
    if(!err){
        console.log("Deletion successful!");
    }
});