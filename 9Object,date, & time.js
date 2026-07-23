"use strict"
// ======================OBJECT==============================
const month = ["jan", "feb", "mar", "Apr", "may",];
const car = {
    name: "swift",
    power: 80,
    torque: 120,
    // variants:[],
    // ptw: function () { return this.power/this.weight*1000},
    // ptw() { return this.power/this.weight*1000},
    // set setVariants(x){this.Variants.push(x)}
}
// car.setVaraints="LXI";
// car.setVaraints="XYZ";
car.price = 800000;
car.power = 500;
car.weight = 600;
delete car.torque;
const swift = { name: "swift", power: 90, torque: 90 };
const infotainment = { brand: "harman", weight: 50, gps: true, applecarplay: true };
const y = { brand: "maruti", parent: "suzuki" }
// console.log(month);
// console.log(car);
// console.log(swift);

// const fan={};
// console.log(car.name);
// console.log(typeof(month));
// console.log(typeof(car));
// console.log(car instanceof(Object));
// console.log(Array.isArray(month));
// console.log(Array.isArray(car));
// console.log(Array.isArray(swift));
// console.log(alert instanceof(Object));
// console.log(car.constructor.name);
// console.log(month.constructor.name);
// Object.freeze(car);
// swift.name="BMW";
// console.log(swift);
// console.log(car);
// console.log(Object.isFrozen());
// console.log("name" in car );
// console.log("power" in car );
// console.log("type" in car );
// console.log("power" in car );
// console.log(car.hasOwnProperty("toString") );
// console.log(car.hasOwnProperty("power") );
// console.log(Object.hasOwn("toString",car));
// console.log(car);
/*for (let i in car) {
    console.log(`${i}:${car[i]}`);
}
console.log("----------");

for (let element in month) {
    console.log(month[element]);
}
console.log("----------");
for (let i in car) {
    console.log(i, car[i]);
}
console.log("----------");*/

/*for (let i in car) {
    console.log(i, car[i]);
}*/

/*for (let key in car) {
    if (typeof car[key] === "function") {
        console.log(key, car[key]());
    } else {
        console.log(key, car[key]);
    }
}*/

// console.log(car);
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(car);
// console.log(car);
/*for(let i of month){
    console.log(i);   
}*/

/*for(let i of Object.entries(car)){
    console.log(i[0],i[1]);    
}
*/
// Object.assign(car, infotainment);
// Object.assign(car,y)
// console.log(car);

const user = { name: "lorem", age: 54, };
const data = [3, 4, 5];
function sayName(x) {
    // return x.name;
    return `name is : ${x.name} , age is :${x.age}`;
}
function getFirst(x) {
    return x[0]
}
// console.log(sayName(user));
// console.log(getFirst("abc"));
// console.log(getFirst(["Manish","Aanish","Ranish",]));
// console.log(getFirst({name:"Ramesh", rollno:21}));
// console.log(getFirst({name:"Ramesh", rollno:21}));
// console.log(getFirst(month));
function sayName(x) {
    return `name is ${this.name} and age  is${this.age}`;
};
// console.log(sayName.call(user));
// const t=sayName.bind(user);
// console.log(t());


function sum(x, y, z) {
    return x + y + z;
}
// console.log(sum.apply(null,data));
console.log(sum(...data));

// =======================Timeer=============================
// setTimeout(()=>{
//     console.log("check");    
// }, 1000)

// setTimeout(() => {
//     console.log("x")    
// }, 1000);

// setTimeout(()=>console.log(1),1000);

// setInterval(()=>{
//     console.log("i")    
// },1000)

/*let count=0;
setInterval(()=>{
    console.log(count=count+1);    
},1000)*/

let count = 0;
function timer() {
    const interval = setInterval(() => {
        count++;
        console.log(count);
        document.querySelector(".counter").textContent = `Counter is  ${count}`;
        if (count === 10) {
            document.querySelector(".counter").style.color = "red";
            clearInterval(interval);
            console.log("stopped");
        }
    }, 1000)
}

let countButton = document.querySelector(".countButton");
countButton.addEventListener("click", timer);

// setInterval(() => {

// document.querySelector(".date").innerHTML=new Date()

// }, 1000);
// =======================Date=============================

function showDate() {
    document.querySelector(".date").innerHTML = `${new Date()}<br/>`;
    document.querySelector(".date").innerHTML += `${new Date(0)}<br/>`;
    document.querySelector(".date").innerHTML += `${new Date().getDate()}<br/>`;
    document.querySelector(".date").innerHTML += `${new Date().getMonth() + 1}<br/>`;
    document.querySelector(".date").innerHTML += `${new Date().getFullYear()}<br/>`;
    document.querySelector(".date").innerHTML += `date is : ${new Date().toDateString()}<br/>`;
    document.querySelector(".date").innerHTML += `locale date is : ${new Date().toLocaleDateString()}<br/>`;
    document.querySelector(".date").innerHTML += `TIME  : ${new Date().toLocaleTimeString()}<br/>`;
    document.querySelector(".date").innerHTML += `Date & TIME  : ${new Date().toLocaleString()}<br/>`;
    document.querySelector(".date").innerHTML += `Date & TIME  : ${new Date().toUTCString()}<br/>`;
    document.querySelector(".date").innerHTML += `Date & TIME  : ${new Date().toISOString()}<br/>`;
}
showDate();
setInterval(showDate, 1000)
// document.querySelector(".date").innerHTML=new Date()



console.log("end");

