const fs=require("fs");


// let res= fs.appendFileSync("f1.txt","Hello I am F1 file.");      /*ye file ko append krta or agr file na bna ho */
                                                                      /*  to usko bna v deta h*/


fs.appendFileSync("f1.txt","you guys are smart.");

let data=fs.readFileSync("f1.txt");
console.log(data);
console.log(data+"");

let data=fs.readFileSync("f1.txt","utf-8");
console.log(data);