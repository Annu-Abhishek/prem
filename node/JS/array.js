// array is a collection of elements
// we can store different values of different types in an array
let cars=['BMW', 'audi', 1,2,3,true];
// console.log(cars);

// accessing the elements of an array

// console.log(cars[0]);
// console.log(cars[2]);

// replacing elements of an array
// cars[1]='mahindra';
// console.log(cars[1]);

// adding elements in an array
cars[6]='suzuki';
console.log(cars);

// methods of an array
//1.)  pop method----->removes element from the last
cars.pop();
console.log(cars); /*last m jo element rhega wo hat jaega*/

// 2.)push method-------->it adds a new element in the end
cars.push("TATA");
console.log(cars);

// 3.) UNSHIFT METHOD------->IT ADDS A NEW ELEMENT IN THE START OF ARRAY
cars.unshift('jagguar');
console.log(cars);

// 4.)SHIFT METHOD------------>IT REMOVES AN ELEMENT FROM STARING OF AN ARRAY
cars.shift();
cars.shift();
console.log(cars);

// 5.) array length...................>tells the length of array
console.log(cars.length);


// 2d array...........>
let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(array2d);
// console.table(array2d);
// console.log(array2d[1][2]);
// let res=array2d[1];
// console.log(res);
// console.log(res[2]);
console.log(array2d.length);      /*how many rows in this array2d*/
console.log(array2d[1].length);    /*how many elements in this row*/
array2d[1][1]=false;
console.table(array2d);
