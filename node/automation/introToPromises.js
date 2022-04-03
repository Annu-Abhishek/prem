

const fs= require('fs');

// synchronous working
// console.log("before");

// let data = fs.readFileSync("f1.txt");
// console.log(data +"");

// console.log("after");

// asynchronous working

// console.log ('early')

// fs.readFile("f1.txt",cb);

// function cb(err,data){
//     if (err){
//         console.log("err");
//     } else {
//         console.log(data +"");
//     }
// }

// console.log("late");

// promise working (pending )

// let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");

// console.log(promiseThatFileWillBeRead);

//  promise working

console.log("morning");
let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");

promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.catch(printError);        // .then and .catch ......if  & else ...jse pair hn
                                                    //       |                      |
                                                    //     asynchronous         synchronous   

 function printData(data){
     console.log(data + "")
 }  
 function printError (err) {
     console.log(err);
 }                                                 

console.log("evening");



