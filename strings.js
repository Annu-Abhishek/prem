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


