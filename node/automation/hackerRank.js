const puppeteer = require("puppeteer");
let cTab;
let email = "";
let password = "";

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
   let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
   return visitingLoginPagePromise;

})
.then (function () {
    console.log("Hackerrank page is opened");
    let emailWillBeTypedPromise = cTab.type("#input-1",email);
    return emailWillBeTypedPromise;
})
.then (function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = cTab.type("#input-2",password);
    return passwordWillBeTypedPromise;
})
.then( function(){
    console.log("password has been typed");
    let willBeLoggedInPromise = cTab.click(
        ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise ;
})
.then( function(){
    console.log("logged into hackerrank successfully");
})
.catch(function (err) {
    console.log(err);
});