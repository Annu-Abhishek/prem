
// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
// 3) node wcat.js -n file1 file 2 file3 OR node wcat.js -n file1 
//node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt
const fs = require("fs");
// let input = process.argv;
// console.log(input);
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let filesArr = [];
let optionsArr = [];
//===============> placed files path in filesArr <=============
for (let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
     else {
       filesArr.push(inputArr[i]);
     }
}
// console.log("file to be read are " + filesArr);
//=============>check if all the files are present<============= //
for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("One or more File(s) do not exist ");
        // return;
        process.exit();
    }
}

// =============>content read and appending starts<=============//
let content = "";
for (let i = 0; i < filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + "\r\n";           /* for mac \n for windows \r\n  ...or ye command isliye h takki ek file k bad dusre file k content aaye to uss chipke nhi*/ 
                     
}
// console.log(content);

let contentArr = content.split("\r\n");             /* for windows \r\n */
// console.log(contentArr); 
// console.table(contentArr);

//check if -s is present or not
let tempArr = [];
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    // console.table(contentArr);
   
    // //push everything in tempArr except null
     for (let i = 0; i < contentArr.length; i++){
         if (contentArr[i] != null) {
             tempArr.push(contentArr[i]);
       }
     }
    //  console.log("data after removing extra lines\n",tempArr);
    contentArr=tempArr;
}


// .....(-s)implement ho gya---terminal m (node wcat2.js -s f3.txt)...ye type kro
// ......aor v file ka dekhna h to ---terminal m... (node wcat2.js -s f1.txt f2.txt f3.txt)..ye type kro

// ---------ab -n , -b  ko implement krna h--------
let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");

let finalOption ="";

// if -n or -b is not found, -1 is returned

if(indexOfN != -1 &&  indexOfB != -1){
    if(indexOfN < indexOfB){
        finalOption ="-n";
    }
    else{
        finalOption = "-b";
    }
}

// either -n is present or -b is present
else {
    if (indexOfN != -1){
        finalOption = "-n";
    }
    else if (indexOfB != -1){
        finalOption= "-b";
    }
}
//  calling of option by  evaluting finalOption
if(finalOption == "-n"){
    modifiyContentByN();
}
else if (finalOption == "-b"){
    modifiyContentByB();
}
function modifiyContentByN() {
for(let i=0;i<contentArr.length;i++){
    contentArr[i]=(i +1) + ")" +contentArr[i];
}
}
function modifiyContentByB() {
    let count =1;
    for(let i=0;i<contentArr.length;i++){

        if(contentArr[i] !=""){
            contentArr[i]=count +")" + contentArr[i];
            count ++;
        }
    }   
}

console.log(contentArr);

