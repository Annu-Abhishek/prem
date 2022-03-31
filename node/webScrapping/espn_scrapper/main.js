let url =  "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const fs = require("fs");
const path =require("path");
const cheerio=require("cheerio");

const allMatchObj = require("./allMatch");

request(url,cb);


function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
         handleHtml(body);
    }
}

//  console.log(__dirname);
let iplPath = path.join(__dirname,"IPL");
if (!fs.existsSync(iplPath)) {
    fs.mkdirSync(iplPath);
}


function handleHtml(html) {
    
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    // console.log(anchorElem);
    // attr ==attribute method==method for getting all attributes and their values
    let relativeLink = anchorElem.attr("href");
    // console.log (relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
      allMatchObj.getAllMatch(fullLink);
}
// series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard'