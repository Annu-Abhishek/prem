const cheerio = require("cheerio");

let html = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;

//cheerio stores data in form of object
let selecTool = cheerio.load(html);       // ek bar is line ko use krna h html ka data store krne k liye or bar bar selecTool ka use kr k data l sakte ho

let fruitNameArr = selecTool("#fruits");  //fruits ek id selector h isliye '#' use hua select krne k liye
console.log(fruitNameArr.text());

let fruitName = selecTool(".pear");     // pear ek class selector h isliye "." use hua h select krne k liye 
console.log(fruitName);