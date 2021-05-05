const HelloFunc = require('./helloWorld');

//HelloFunc.Hello();

//console.log(HelloFunc.name);

//setInterval

setInterval(()=>{
    HelloFunc.Hello();

}, 1000);

setTimeout(()=>{
    console.log(HelloFunc.name);
},5000)