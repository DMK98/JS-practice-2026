"use strict"

// const a = [3, 4, 5, 8, 9];
// const x=a[0],y=a[1],z=a[2];
// console.log(x,y,z);
// const[x,y,z]=a;
// console.log(x,y,z);
// const company = { comapny: "tcs", address: "noida", branchId: 123 };
// const emp = { name: "manish", age: 21, ...company };
// const name=b.name,power=b.power;
// const{name,age}=stu;

// console.log(name);

// let x = 5, y = 9;
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

/*let str="abcd";
let arr=[...str];
console.log(arr);*/

/*const arr1=[10,20,30];
const arr2=[...arr1];
console.log(arr1);
console.log(arr2);*/

// const number=[10,20,30];
// console.log(...number);

/*function student(...name){
    console.log(name);
    
}
student("manish","rahul","amit")*/

/*function demo(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);    
}
demo(10,20,30,40,50)*/
/*function test(a, ...b) {
    console.log(a);
    console.log(b);
}

test(10, 20, 30, 40);*/


/*const [...fruits] = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[1]);*/

/*function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30,40);*/

/*function demo(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

demo(10,20,30,40,50);*/

// Rest Operator in Array Destructuring

/*const arr=[10,20,30,40];
const [a, ...rest]=arr;

console.log(a);
console.log(rest);*/

/*const arr=[100,200,300];
const[x,...y]=arr;
x=100
y=[200,300]
console.log(x);
console.log(y);*/

/*const [a, b, ...rest] = [10, 20, 30, 40, 50];
const [c, d, ...myTry] = [10, 20, 30, 40, 50];
// a=10;
// b=20,
// rest=[30,40,50]
console.log(a);
console.log(b);
console.log(rest);
console.log(c);
console.log(d);
console.log(myTry);*/

/*const student={
    name:"manish",
    age:25,
    city:"delhi"
}
const{name,...rest}=student;
console.log(name);
console.log(rest);*/

/*const car = {
    name: "Swift",
    price: 800000,
    color: "White",
    model: 2025
};

const { name, ...rest } = car;

// name:swift
// {
//     price: 800000,
//     color: "White",
//     model: 2025
// }

console.log(name);
console.log(rest);*/

/*const car = {
    name: "Swift",
    price: 800000,
    color: "White",
    model: 2025,
    fuel: "Petrol"
};

const { name, price, ...rest } = car;*/

// name = name: "Swift",

// price = price: 800000,

// rest = {color: "White",
//     model: 2025,
//     fuel: "Petrol"}

// console.log(name);
// console.log(price);
// console.log(rest);

// before destructuring
/*const student = {
    name: "Manish",
    age: 25,
    city: "Delhi"
};
const name=student.name;
const age=student.age;
const city=student.city;
console.log(name);
console.log(age);
console.log(city);*/

// With Destructuring

/*const student = {
    name: "Manish",
    age: 25,
    city: "Delhi"
};
const{name,age,city}=student;
console.log(name);
console.log(age);
console.log(city);*/

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// for(let i of gen){
//     console.log(i);    
// }

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.max(2,4,8,9));
// console.log(Math.max(...[2,4,8,9]));
// console.log(Math.min(...[2,4,8,9]));

/*let n1 = document.querySelector(".n1").value = Math.floor(Math.random() * 9);
let n2 = document.querySelector(".n2").value = Math.floor(Math.random() * 9);
// let n3=document.querySelector(".n3");
document.querySelector(".check").addEventListener("click", function () {
    event.preventDefault()
    let nv1 = document.querySelector(".n1").value;
    let nv2 = document.querySelector(".n2").value;
    let n3 = document.querySelector(".n3");
    console.log(n1, n2, n3);
    if (nv1 === nv2) {
        console.log("same");
        n3.value = "same";
    } else {
        console.log("not same");
        n3.value = "Not same";
    }
});
document.querySelector(".reset").addEventListener("click", function () {
   n1 .value = Math.floor(Math.random() * 9);
   n2 .value = Math.floor(Math.random() * 9);
    console.log("mk");

})*/

document.cookie="city:noida"