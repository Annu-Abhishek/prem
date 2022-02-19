// ............string is a sequence of character

var str="Hello pepcoders";
// H e l l o <space> p e p c  o  d  e  r  s
// 0 1 2 3 4    5    6 7 8 9 10 11 12 13 14
console.log(str);
console.log(str.length);

// ..........string methods..........

// 1. Extraction method

// slice method
// slice(start,end);    ...> start index inclusive h or end index exclusive h
var slicedStr= str.slice(6,15);       /*mtlb 6 index s start hoga aur 14 index tkk ki batt ho rhi h*/
console.log(slicedStr);                  /* mtlb "pepcoders" hi keval print hoga*/

console.log(str);                       /*  original string ko kuchh nhi hoga wo as it is rhegi*/

var slicedStr=str.slice(6);           /*  mtlb 6th index s lekr puri index print hogi*/
console.log(slicedStr);

var slicedStr=str.slice(6,-4);            /* mtlb 6th index s lekr puri index se 4 index km print hogi */
console.log(slicedStr);

// substring.
// substring(start index, length)
let ans=str.substr(2,6);                 
console.log(ans);                     /* index 2 s suru hogi aur next 6 index print hogi*/


// replacing to A NEW STRING
str="YOLO";
console.log(str);

// upper and lower cases
console.log(str.toLowerCase());

str="fomo";
console.log(str.toUpperCase());


// concatenation method
// ..................2 string ko jod k ek bnata h bich m koi space  nhi
let FirstStr="believe ";
let SecondStr="in yourself";
let concatenatedStr=FirstStr + SecondStr ;
console.log(concatenatedStr);

// concat method....
// .................agr 2 string k alwa v kuchh jodna h ...3rd string m 

let concatStr = FirstStr.concat(SecondStr, " and me");
console.log(concatStr);

// trim method
// ............ye string k start and end k whitespaces (aise hi decoration k liye jo space dete hn) ko remove krta h
var str ="                           hello      how are you                        ";
console.log(str.length);    /* string ka length 50+ hoga*/

console.log(str.trim());             /*white spaces (yani start or end k spaces )ko cut kr diya*/
console.log(str.trim().length);        /*ab keval hello     how are you ka length bta rha h*/


// NOTE.... string in JavaScript are immutable
//  WHILE in java string are mutable................mtlb string k characters ko change nhi kr sakte javascript m example niche h
var str="welcome";
str[4]="z";
console.log(str);           /*java m 4th index p z aaya hota pr javascript m welcome ka welcome hi rh gya */
