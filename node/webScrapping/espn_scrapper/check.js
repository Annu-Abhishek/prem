const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path =require("path");
const xlsx = require("xlsx");

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
    let matchResult = matchResEle.text();
     console.log(matchResult);
// 4. get team names
    let teamNamesArr = selecTool(".name-detail>.name-link") ;   
    // console.log(teamNames.text());
    let ownTeam = selecTool(teamNamesArr[0]).text();
    let opponentTeam = selecTool(teamNamesArr[1]).text(); 
    console.log(ownTeam);
    console.log(opponentTeam);   

    // 5. get innings
    let allBatsmenTable = selecTool(".table.batsman tbody");

    // let allBatsmenTable = selecTool(".table.batsman tbody>tr");   agr m ye krta to table ki body nhi but 15 rows aate
                            //  note hmare pass batsaman ki table 2 h ek DC or other MI
    
    // console.log(allBatsmenTable.text());
    let htmlString =""; 
    let count = 0 ;   
    for(let i=0; i<allBatsmenTable.length; i++){
        htmlString += selecTool(allBatsmenTable[i]).html();     // hmne dono table k html ko add krk bdi html bnai
       
        // get the descendants(table columns) of each element (table rows)
        // let allcolms = selecTool(allBatsmenTable[i]).find("td");
        // Shikhar Dhawan  b J Yadav1513-30115.38   -> 8 columns in a row
        // console.log(allcolms.text());

        //  check to see if any of the matched elements have the given className
//         // let hasData = selecTool(allColms[0]).hasClass();
//     }
//     console.log(htmlString);                // bdi html  ko print krwa diya isko copy krk ek inning.html file m table tag m wrap krk live server kra diya
// }
        let allRows = selecTool(allBatsmenTable[i]).find("tr");   //table m jitne v tr the sb selected =32 

        for (let i = 0; i< allRows.length; i++){              // 32 times loop chlega
            // check to see if any of the matched elements havce the given className

            // if (selecTool(selecTool(allRows[i]).find("td")[0]).hasClass("batsman-cell")){
            //         //        row i m jitne v td hn (8 columns the =8 td) usme phli column ([0]) us,e batsman-cell agr h to selecTool s select krna
            //              //           note ...hasclass boolean h agr true rhega to isk andr jaenge false pr nhi
            //              //to is s khali row jo thi wo select nhi hogi 32 k jagah p 15 rows hi select hogi
            //     count ++;
            //     console.log("inside" + count);
            // }

            let row = selecTool(allRows[i]);
            let firstColmnOfRow = row.find("td")[0];
            if (selecTool(firstColmnOfRow).hasClass("batsman-cell")){
                // will be getting valid data
                // count++;
                //  console.log("inside" + count);
                // name | runs |balls| 4's | 6's | sr

                // for(let i=0; i<8; i++) {
                //     if(i==1 || i==4) continue;                      // 1st way to print all data using for loop
                //     else {
                //         console.log(selecTool(row.find("td")[i]).text());
                //     }
                // }
                let playerName = selecTool(row.find("td")[0]).text().trim();
                // console.log(playerName);
                let runs = selecTool(row.find("td")[2]).text();
                let balls = selecTool(row.find("td")[3]).text();
                let numberOf4 = selecTool(row.find("td")[5]).text();
                let numberOf6 = selecTool(row.find("td")[6]).text();
                let sr = selecTool(row.find("td")[7]).text();
                
                console.log(
                `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
                 
                );

                processInformation(
                    dateOfMatch,
                    venueOfMatch,
                    matchResult,
                    ownTeam,
                    opponentTeam,
                    playerName,
                    runs,
                    balls,
                    numberOf4,
                    numberOf6,
                    sr
                    );
                    
               }
            }
        }

        
                function processInformation(dateOfMatch,venueOfMatch,matchResult,ownTeam,opponentTeam,playerName,runs,balls,numberOf4,numberOf6,sr) {
                    let teamNamePath = path.join(__dirname, "IPL",  ownTeam);
                    if (!fs.existsSync(teamNamePath)) {
                      fs.mkdirSync(teamNamePath);
                    }
                    let playerPath = path.join(teamNamePath, playerName + ".xlsx");
                    let content = excelReader(playerPath, playerName);

                    let playerObj = {
                        dateOfMatch,
                        venueOfMatch,
                        matchResult,
                        ownTeam,
                        opponentTeam,
                        playerName,
                        runs,
                        balls,
                        numberOf4,
                        numberOf6,
                        sr
                    };

                    content.push(playerObj);
                    //this function writes all the content into excel sheet , and places that excel sheet data into playerPath-> rohitSharma.xlsx
                    excelWriter(playerPath, content, playerName);
                }
            }
            function excelReader(playerPath, sheetName){
                if(!fs.existsSync(playerPath)){
                    return [];
                }

                  //if playerPath already has some data in it 
                let workBook = xlsx.readFile(playerPath);
                 //A dictionary of the worksheets in the workbook. Use SheetNames to reference these.
                let excelData = workBook.Sheets[sheetName];
                let playerObj = xlsx.utils.sheet_to_json(excelData);
                return playerObj;
            }
            function excelWriter(playerPath, jsObject, sheetName) {
                // creates a new workbook
                let newWorkBook = xlsx.utils.book_new();
                // converts an array of js objects to a worksheet.
                let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
                // it appends a worksheet to a  worksheet
                xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, sheetName);
                // attempts to write or download workbook data to file
                xlsx.writeFile(newWorkBook, playerPath);
            }
            



// visit every scorecard and get info
module.exports = {
    gifs :getInfoFromScorecard
}