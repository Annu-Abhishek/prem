const fs = require("fs"); //fs module"
const path = require("path"); // path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['jpg', 'jpeg', 'png']

}

function organize (srcPath) {
    // console.log('srcPath', srcPath);
    if (srcPath == undefined) {
        //  the process.cwd() method returns the current working directory of the Node.js process.
        // console.log(srcPath); //undefined
        srcPath = path.join(process.cwd(), "../downloads");
        //  console.log("source path is " , srcPath);
    }
    
    // console.log('srcPath - 2', srcPath);
    let organizedFiles = path.join(srcPath , "organized_files");
    console.log("organized files folder path is", organizedFiles);
    if(fs.existsSync(organizedFiles) == false ) {       //organized files naam ka folder exist nhi krta to ek folder bana do warna rhne do

    fs.mkdirSync(organizedFiles);                                       /*  mkdirSync ek folder bnata h*/
} else console.log('folder already exists');

// 3. Scan the entire srcPath(downloads folder in this case)

// Reads the contents of the directory. -> Basically reads the names of files present in the directory 
let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

// traverse over all the files and classify them on the basis of their extension (.pdf , .mp3)
for (let i=0; i < allFiles.length; i++){
    let fullPathOfFile = path.join(srcPath, allFiles[i]);
    // console.log(fullPathOfFile);
    // 1. check if it is a file or folder
    //  lstatSync gives the information regarding the link provided, ki ye file h ya folder
    let isFile = fs.lstatSync(fullPathOfFile).isFile();
     console.log(allFiles[i] + " is " + isFile);
    if (isFile){
        // 1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        // console.log(ext);
        // 1.2 get folder name from extension
        let folderName = getFolderName(ext); // ye function h parameter m ext ka name lega or folder ka name dega
        // console.log(folderName);
        // 1.3  copy from src folder (srcPath) and paste in dest folder (folder_name e.g. media, documents)
        copyFileToDest(srcPath,fullPathOfFile, folderName);
    }

 }
}

function getFolderName(ext) {
    // magic
    for(let key in types) {
        // console.log(key);
    for(let i = 0; i < types[key].length; i++) {
        if(types[key][i]== ext) {
            return key;
        }
    }
  }
 return "miscellaneous";
}

function copyFileToDest(srcPath,fullPathOfFile, folderName) {
    
    // 1.folderName ka path bnana h 
    let destFolderPath = path.join(srcPath, "organized_files", folderName); 

    // 2. check folder if it exists, if not then make folder
    if(!fs.existsSync(destFolderPath)) {
        fs.mkdirSync(destFolderPath);
    }
    // 3. copy file from src folder to dest folder
    
    let fileName = path.basename(fullPathOfFile);    // returns the last portion of  a path ..jo ki filename hota h
    let destFileName = path.join(destFolderPath, fileName);
                        // src          dest
    fs.copyFileSync(fullPathOfFile, destFileName);
}


// let srcPath ;
// organize(srcPath);
module.exports = {
    organize : organize
}