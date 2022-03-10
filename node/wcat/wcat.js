//  1) node wcat.js filepath => displays the content of a file in terminal
//  1) node wcat.js filepath1 filepath2 filepath3 => displays the contents of all file in terminal



// node wcat.js f1.txt
// node wcat.js f1.txt f2.txt f3.txt

// let input = process.argv;        /* user s input lene k liye use*/
// console.log(input);

// let input = process.argv.slice(2);          /* suru ka 2 string ek m node ka path h ..or 2nd m wcat.js ka path h wo display nhi krega*/
// console.log(input);

// array input lena h user s 
const fs =require("fs");
let inputArr = process.argv.slice(2);
 let filesArr = [];
 for(let i=0; i<inputArr.length;i++){
     filesArr.push(inputArr[i]);
 }
//  console.log("files to be read are" + filesArr);

//  check if all the files are present
for (let i =0; i<filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("file does not exist");
    
    return;
  }
}

// content read and appending starts
let content = "";
for(let i=0; i<filesArr.length;i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content +=fileContent + "\n";
}
console.log(content);
