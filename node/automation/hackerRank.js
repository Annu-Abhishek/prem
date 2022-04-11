const puppeteer = require("puppeteer");
let curTab;
//  let email = "";
//  let password = "";
 let {email, password} = require("./secrets");
let {answer} = require("./codes");

let browserOpenPromise = puppeteer.launch({
    headless : false,
    defaultViewport:null,
    args: ["--start-maximized"],
    // chrome://version/                    (google search m likhna or executable file copy krk \ ko / bnana)
    //  executablePath:"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
    // excutablePath : "/path/to/chrome",
});
browserOpenPromise
.then(function(browser){
    console.log("browser is open");
    // console.log(browseropenPromise);
    let allTabsPromise = browser.pages();
    return allTabsPromise;
})
.then(function(allTabsArr){
    curTab = allTabsArr[0];
    console.log("new tab");
    //  URL to navigate page to 
   let visitingLoginPagePromise = curTab.goto(
       "https://www.hackerrank.com/auth/login"
       );
   return visitingLoginPagePromise;

})
.then (function (data) {
    console.log("Hackerrank page is opened");
    let emailWillBeTypedPromise = curTab.type("#input-1",email);
    return emailWillBeTypedPromise;
})
.then (function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = curTab.type("#input-2",password);
    return passwordWillBeTypedPromise;
})
.then( function(){
    console.log("password has been typed");
    let willBeLoggedInPromise = curTab.click(
        ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise ;
})
.then( function(){
    console.log("logged into hackerrank successfully");
    let algorithmTabWillBeOpenedPromise = waitAndClick ("div[data-automation='algorithms']");
    return algorithmTabWillBeOpenedPromise;
})
.then(function () {
    console.log("algorithm page is opened");
    let allQuesPromise = curTab.waitForSelector(
        'a[data-analytics="ChallengeListChallengeName"]'
    );
    return allQuesPromise;
})
.then(function (){
    function getAllQuesLinks() {
        let allElemArr = document.querySelectorAll (
            'a[data-analytics="ChallengeListChallengeName"]'
        );
        let linksArr = [];
        for(let i=0; i < allElemArr.length; i++){
            linksArr.push(allElemArr[i].getAttribute("href"));

        }
        return linksArr;
    }
   let linksArrPromise = curTab.evaluate(getAllQuesLinks);
   return linksArrPromise;
})
.then(function (linksArr){
    console.log("links to all questons received");
    // console.log(linksArr);
    // question solve krna h
    // link to the question to be solved, idx of the linksArr
    let questionWillBeSolvedPromise = questionSolver(linksArr[0], 0);
    for (let i=1; i < linksArr.length; i++){
        questionWillBeSolvedPromise = questionWillBeSolvedPromise.then(function() {
            return questionSolver(linksArr[i], i);
        })   
    }
    return questionWillBeSolvedPromise;

})
.then(function (){
    console.log("question is solved");
})

.catch(function (err) {
    console.log(err);
});
















function waitAndClick(algoBtn) {
    let myPromise = new Promise (function (resolve ,reject){
        let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
        waitForSelectorPromise.then(function () {
            console.log("algo btn is found");
            let clickPromise = curTab.click(algoBtn);
            return clickPromise;
        })
        .then(function () {
            console.log("algo btn is clicked");
            resolve();
     })
     .catch(function(err){
         reject(err);
     })
    });
    return myPromise;
}

function questionSolver(url, idx){
    return new Promise(function (resolve, reject){
        let fullLink = `https://www.hackerrank.com${url}`;
        let goToQuesPagePromise = curTab.goto(fullLink);
        goToQuesPagePromise
        .then(function(){
            console.log("question opened");
            // TICK THE CUSTMO INPUT BOX MARK
            let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
            return waitForCheckBoxAndClickPromise;
        })
        .then(function (){
            // SELECT THE BOX WHERE CODE WILL BE TYPED
            let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
            return waitForTextBoxPromise ;
        })
        .then(function (){ 
            let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx]);
            return codeWillBeTypedPromise;
        })
        .then(function (){
            // CONTROL KEY IS PRESSED PROMISE
            let  controlPressedPromise = curTab.keyboard.press("Control");
            return controlPressedPromise;
        })
        .then(function (){
            let  aPressedPromise = curTab.keyboard.press("a");
            return aPressedPromise;
        })
        .then(function (){
            let  xPressedPromise = curTab.keyboard.press("x");
            return xPressedPromise;
        })
        .then(function () {
            // CONTROL KEY IS RELESED
            let ctrlIsReleasedPromise = curTab.keyboard.up("Control");
            return ctrlIsReleasedPromise;
          })
        .then (function (){
            // SELECT THE EDITOR PROMISE
            let cursorOnEditorPromise = curTab.click(
                ".monaco-editor.no-user-select.vs"
            );
            return cursorOnEditorPromise;
        })
        .then(function () {
            //CONTROL KEY IS PRESSED AGAIN
            let controlPressedPromise = curTab.keyboard.down("Control");
            return controlPressedPromise;
          })
          .then(function () {
            let aKeyPressedPromise = curTab.keyboard.press("A",{delay:100});
            return aKeyPressedPromise;
          })
          .then(function () {
            let vKeyPressedPromise = curTab.keyboard.press("V",{delay:100});
            return vKeyPressedPromise;
          })
          .then(function () {
            let controlDownPromise = curTab.keyboard.up("Control");
            return controlDownPromise;
          })
          .then(function () {
            let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
            return submitButtonClickedPromise;
          })
          .then(function () {
            console.log("code submitted successfully");
            resolve();
          })
          .catch(function (err) {
            reject(err);
          });

    });
}