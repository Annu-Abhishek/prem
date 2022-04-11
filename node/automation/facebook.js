const puppeteer = require("puppeteer");
let cTab;
//  let email = "";
//  let password = "";
let {email, password} = require("./password");

let browserOpenPromise = puppeteer.launch({
    headless : false,
    defaultViewport:null,
    args: ["--start-maximized"],
    // chrome://version/                    (google search m likhna or executable file copy krk \ ko / bnana)
    //  executablePath:"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
    // excutablePath : "/path/to/chrome",
});
browserOpenPromise.then(function(browser){
    console.log("browser is open");
    console.log(browser);
    let allTabsPromise = browser.pages();
    return allTabsPromise;
})
.then(function(allTabs){
    cTab = allTabs[0];
    console.log("new tab");
    //  URL to navigate page to 
   let visitingLoginPagePromise = cTab.goto("https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ5MDM5MjczLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D");
   return visitingLoginPagePromise;

})
.then (function () {
    console.log("Hackerrank page is opened");
    let emailWillBeTypedPromise = cTab.type("#email",email);
    return emailWillBeTypedPromise;
})
.then (function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = cTab.type(".inputtext._55r1.inputtext._9npi.inputtext._9npi",password);
    return passwordWillBeTypedPromise;
})
.then( function(){
    console.log("password has been typed");
    let willBeLoggedInPromise = cTab.click(
        "#loginbutton"
    );
    return willBeLoggedInPromise ;
})
.then( function(){
    console.log("logged into facebook successfully");
})
.catch(function (err) {
    console.log(err);
});