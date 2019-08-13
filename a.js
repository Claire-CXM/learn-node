// console.log("hello world");

//全局作用域（global）->模块作用域->函数作用域

//ES6 module
// import path from "path";
//node module
// const path=require("path");

const path=require("path");
const fs=require("fs");
const less = require("less");


let lessContent=fs.readFileSync(path.resolve("styles","submit.less"),"utf-8");
let promise=less.render(lessContent);
promise.then((output)=>{
    fs.writeFileSync(path.resolve("styles","submit.css"),output.css,{flag:"w"});
});

// babel.transform()

// for(let i=1;i<=10;i++) {
//     let fileContent =fs.readFileSync(path.resolve("temp",`hello-${i}.json`),"utf-8");
//     fileContent=JSON.parse(fileContent);
//     fs.mkdirSync(path.resolve("temp",fileContent.title));
// }

// for(let i=1;i<=10;i++){
//     let json={
//         title:`标题${i}`
//     }
//     json=JSON.stringify(json);
//     fs.writeFileSync(path.resolve("temp",`hello-${i}.json`),json,{flag:"w"});
// } 


//for(let i=1;i<=10;i++){
//     fs.writeFile(path.join("D:","a.txt"),i+"\n",{flag:"a"});
// }

// {    console.log("成功写入");
// })


// const test=require("./test");
// console.log(test.b);

// console.log(path.join('abc','123',''));
// console.log(path.resolve('abc','123',''));
