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

    // 3. get result
    let matchResEle = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
    );
     console.log(matchResEle.text());
// 4. get team names
    let teamNamesArr = selecTool(".name-detail>.name-link") ;   
    // console.log(teamNames.text());
    let ownTeam = selecTool(teamNamesArr[0]).text();
    let opponentTeam = selecTool(teamNamesArr[1]).text(); 
    console.log(ownTeam);
    console.log(opponentTeam);   

    // 5. get innings
    let allBatsmenTable = selecTool(".table.batsman tbody>tr");
    console.log(allBatsmenTable.text());
}
// visit every scorecard and get info
module.exports = {
    gifs :getInfoFromScorecard
}