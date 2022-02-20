//    javascript objects are always in key: value pair

let obj={};          /* empty object */
console.log(obj);

// person object
let person={
    // key(property,method()) : value
    name: "Abhishek" ,
    age: 28,                          /* NOTE-EK KEY DUSRE KEY S COMMA(,) SE ALAG HOTI H ....SEMICOLON(;) JB OBJECT KHTM TB LGEAGA */
    phone:99999999,
    gender: "male" ,
    height :  "170cm",

};
console.log(person);

console.log((`Hey ${person.name}, thank you for signing up !`));

console.log(person.gender);                     /* dot notation */
console.log(person["gender"]);                 /* square bracket notation  .......dono s same result */


// nesting of objects

let CaptainAmerica = {
    firstName: "Steve",
    lastName: "Rogers" ,
    friends: ["Bucky", "Tony Stark", "Bruce Banner"],
    
    age: 102,
    
    isAvenger: true,
    address: {
        State: "Manhattan",
        city: "new york",
        country :"USA"
    },                                                         /* ye nesting wala object h isliye khtm hone pr comma(,) */
        sayHi: function() {
            console.log(`hello my name is ${this.firstName}`);
        }
    
};                                                   /* NOTE- OBJECT K ANDR agr koi function h wo khtm hua to semicolon(;) lgega m*/

console.log(CaptainAmerica);
console.log(CaptainAmerica.friends);
console.log(CaptainAmerica.friends[0]);                /* dot notation*/
console.log(CaptainAmerica["friends"][0]);             /* same thing  square bracket notation */

CaptainAmerica.sayHi();                             /* object k andr wala function ko call */


//  for loop in objects

//  in        keyword is used to gets keys in an object
for (let xyz in CaptainAmerica){
    console.log(xyz);               /* is s keys print hoga*/

    console.log(CaptainAmerica[xyz]);           /* is s key ka value print hoga */
}

for(let abc in CaptainAmerica){
console.log(`${abc}: ${CaptainAmerica[abc]}`)                /* ek line m hi print krna h sara to backtick use kro*/
}




