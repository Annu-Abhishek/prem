const request = require("request");
const cheerio=require("cheerio");

// const getScorecardObj = require("./scorecards");       // same chiz ka dusra tarika niche wala line m h
const {gifs} = require("./scorecards");

function getAllMatch(url){
    request(url,cb);
}


function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html) {
    
    let selecTool = cheerio.load(html);
    let scorecardElemArr = selecTool('a[data-hover="Scorecard"]');
     console.log(scorecardElemArr.length);

for(let i=0; i<scorecardElemArr.length; i++){

        // console.log(scorecardElemArr)
     
    // attr ==attribute method==method for getting all attributes and their values
    let scorecardLink = selecTool(scorecardElemArr[i]).attr("href");
     console.log (scorecardLink);
    let fullLink = "https://www.espncricinfo.com" + scorecardLink;
    // console.log("fullLink");

    //  getScorecardObj.gifs(fullLink);             // same chiz ka dusra tarika niche wala line m h
    gifs(fullLink);
    
    //  break;
  }
}

module.exports = {
    getAllMatch : getAllMatch,
};
