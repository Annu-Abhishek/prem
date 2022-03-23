const request = require("request") ;

// cheerio
//  cheeerio parses HTML and it traverses the html so that data can be meaningful and can be manipulated a/c to user's need
const cheerio = require ('cheerio');
request("https://www.worldometers.info/coronavirus/", cb);

function cb (err, res, body) {
    if(err){
        console.error("error",err);
    }else{
        handleHtml(body);
    }
}
function handleHtml(html) {
    let selecTool = cheerio.load(html);
    let coronaStatsArr = selecTool(".")
}

