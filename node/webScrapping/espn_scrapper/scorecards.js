const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard (url) {
    // we have a url of a scorecard, we want to get html of that scorecard
    request(url,cb); 
}

function cb(err,res,body){
    if (err) {
        console.log(err);
    } else {
        getMatchDetails(body);
    }
}

function getMatchDetails(html) {
    let selecTool = cheerio.load(html);
    // 1. get venue
    // 2.get date
    let desc = selecTool(".match-header-info.match-info-MATCH")
    // console.log(desc.text());
    // resultFinal (N), Dubai (DSC), Nov 10 2020, Indian Premier League

    let descArr = desc.text().split(",");
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
}
module.exports = {
    gifs :getInfoFromScorecard
}