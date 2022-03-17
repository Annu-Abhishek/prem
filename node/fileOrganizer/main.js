//  Entry point of my commandline

let helpFunc = require("./command/help");
// console.log(helpFunc.help());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree" :
        // call tree function
        console.log("tree command called and excuted successfully on path" + path);
        break;
    case "organize" :
        // call organise function
        console.log("organise function called and excuted successfully on path" + path);
        break;
    case "help" :
            // call help function
            helpFunc.help();
            // console.log("help function called and excuted successfully" );
        break;
    default :
    console.log("command not recognized :/");
    break    

}