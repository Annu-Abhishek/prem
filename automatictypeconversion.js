var ans="5" +1;
console.log(ans);   /* yahan conactatenation ho gya h "5" +"1.....dono string hn" */

var ans= "1" + 5;
console.log(ans);

console.log(null * 5);      /*null is converted 0, hence bresult is 0 */
console.log(null *"5")        /* null is converted to 0, hence result is 0 */

console.log(undefined * 5);
console.log(undefined *"5");         /*undefined k sath kuch v kro NaN result aaega */

console.log("5" - 1);            /* yahan cancatenation nhi ho sakta h  isliye syting  ko number m bdlna pdega*/

console.log("ten" * 3);        /* yahan ten to pure string h isliye kucchh nhi hoga NaN value */

console.log("10" *3);         /* simple h 30 hoga */