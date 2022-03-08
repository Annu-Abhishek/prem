const fs=require("fs");

// console.log(fs)
 //let res= fs.appendFileSync("f1.txt","Hello I am F1 file.");      /*ye file ko append krta or agr file na bna ho */
                                                                      /*  to usko bna v deta h*/


// fs.appendFileSync("f1.txt","you guys are smart.");

// let data=fs.readFileSync("f1.txt");
// console.log(data);
// console.log(data+"");

// let data=fs.readFileSync("f1.txt","utf-8");
// console.log(data);


//const fs = require("./f1.txt");       /* 1 dot ka mtlb isi folder m jo f1.txt wo chahiye */
// console.log(abc);

const abc = require("../SORAN/temp.js");     /* 2 dot ka mtlb current working  folder s bahar niklo or dusra folder jo
   //(v.imp. jse java m java.import.util krte hn )       SORAN nam ka folder h usme jao or usme jo file h temp nam ki uska
                                                     access chahiye mujhe ...usme kuchh export ho rha h to wahi import hoga */

console.log(abc);

let ans= abc.add(2,4);         /* iss abc se hmne temp file ko access kiya usme jo object h wo v access ho gya */ 
console.log(ans);