"use strict"

const a=[3,4,5,8,9];
// const x=a[0],y=a[1],z=a[2];
// console.log(x,y,z);
// const[x,y,z]=a;
// console.log(x,y,z);
const company={comapny:"tcs",address:"noida",branchId:123};
const emp={name:"manish", age:21,...company};
// const name=b.name,power=b.power;
// const{name,age}=stu;

// console.log(name);

let x=5,y=9;
// let c=x;
// x=y;
// y=c;
// console.log(x,y);

// x=x+y;
// y=x-y;
// x=x-y;

// [x,y]=[y,x]
// console.log("x :",x,"y :",y);

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,3,4));
// console.log(sum(...a));

// console.log(Math.max(...a));
// console.log(Math.min(...a));
// console.log(emp);

// function sum(...x){return x};
// console.log(sum(1,2,3));

/*
const nums=[1,2,3];
function add(x,y,z){return x+y+z};
console.log(add(...nums));
*/

/*
function add(x,y,z){return x+y+z};
let data=[1,2,3];
console.log(add(...data));
*/
/*
const data=[1,2,3];
console.log(Math.max(...data));
*/

// const data=[1,2,3]
// console.log(Math.min(...data));


// let a1=["a","b"];
// let a2=["c","d"];
// a1.push(...a2);
// console.log(a1);

// let a1=["a","b","c"];
// let a2=["d","e","f"];
// let b=a1.concat(...a2);
// console.log(b);

let str="abcd";
let arr=[...str];
console.log(arr);


