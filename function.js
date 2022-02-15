//  function is of 3 types

// 1) normal function
//  function function_name(parameter1, parameter2){
    // to do
// }

// 2) function expression
// let variable_name=function(){
    // do something
// }
// name of variable is used to call the function
// variable_name();
//  let sayHi= function abcd(){
//      console.log("hello guys this is funmction expression");
//  }
//  sayHi();
//  abcd();

function calculator (str,a,b){
    if (str=="add"){
        return function add(){
            console.log(a+b);
        }
        }
    }
//     let returnedFunc = calculator ('add', 2,3);
//     console.log("returned function is\n" + returnedFunc);
//     returnedFunc();

// let sum=function add(a,b){
//     var c= a+b;
//     console.log(c);
// }
// sum(8,11);

// .....3 rd type function....function IIFE(immediately invoked function expression)
// ....additionIIFE.....
let additionIIFE= (function add(a,b){
    return a+b;
}) (30,40);
console.log(additionIIFE);
console.log(additionIIFE (30,40));