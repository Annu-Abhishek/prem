const fs = require("fs"); //fs module"
const path = require("path"); // path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"]
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['jpg', 'jpeg', 'png']

}

function organize (srcPath) {
    if (srcPath == undefined) {
        //  the process.cwd() method returns the current working directory of the Node.js process.
        console.log(srcPath); //undefined
        srcPath = process.cwd();
         console.log("source path is " , srcPath);
    }
    
    let organizedFiles = path.join(srcPath, "organized_files");
    // console.log("organized files folder path is", organizedFiles);
    if(fs.existsSync(organizedFiles) == false ) {       //organized files naam ka folder exist nhi krta to ek folder bana do warna rhne do

    fs.mkdirSync(organizedFiles);                                       /*  mkdirSync ek folder bnata h*/
}
else console.log('folder already exists');
}

organize();