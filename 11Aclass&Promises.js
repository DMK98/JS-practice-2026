"use strict"

Array.prototype.id = 100;
const c = new Array();
// console.log(c.id);

// const d= new Object();


/*function Car(name, power, torque, price) {
        this.name=name;
        this.power=power;
        this.torque=torque;
        this.price=price;
};*/
/*
Car.id=25;
Car.prototype.id=15
const swift = new Car("swift",80,120,500000);
const alto = new Car("alto",90,110,100000);
swift.power = 90;
alto.power = 66;
// console.log(swift);
// console.log(swift.id);
// console.log(alto);
// console.log(alto.id);
// console.log(Car.id);

for(let i in swift){
    // console.log(i);
    console.log(i,swift[i]);
    
}

console.log(swift.hasOwnProperty('id'));
console.log(swift.constructor.name);
console.log(c.constructor.name);





// for (let x in car) {
//     console.log(x, car[x]);
// }
*/

// const m=class{}  // class expression
// class Car{              // class declaration

// }

// function xyz(){
//             // function declaration
// }

// const abc=()=>{
//     // functin expression
// }

// const m=function student(){

// }  

class Car {
    x = 50;  //Public property
    constructor(name, power, torque, price) {
        this.name = name;
        this.power = power;
        this.torque = torque;
        this.price = price;
    }
    static xyz = 100;
    get start() {
        return this.name + 'starts'
    };
}
// const swift = new Car("desire", 100, 120, 1500000)

// console.log(typeof Car);

/*for(let i in swift){
    console.log(i,":",swift[i]);    
}*/

class Suzuki extends Car {
    w = 2;
    constructor(name, power, torque, price) {
        super(name, power, torque, price);
    }
}
class Toyota extends Car {
    w = 3;
    constructor(name, power, torque, price) {
        super(name, power, torque, price);
    }
}

// const swift = new Suzuki("swift", 90, 113, 8000000);
// const alto = new Suzuki("Alto", 100, 120, 1150000);
// const fortuner = new Toyota("fortuner", 200, 500, 4000000)
// console.log(swift.x);
// console.log(swift.w);
// console.log(alto.x);
// console.log(alto.w);
// console.log(fortuner.w);
// console.log(fortuner.x);

// setTimeout(()=>console.log("Hello"),1000)
// setTimeout(()=>alert("hello"),1000)
// console.log("done");
// alert("hello")
 
/*
document.body.addEventListener("click",function(){console.log(this)});

console.time("t");
setTimeout(()=>{
    console.log("hello");
    
},1000);

console.log("End Done ");

console.log("done");
// console.timeEnd("t");

Promise.resolve(console.timeEnd("t")).then(i=>console.log(i));
Promise.resolve("manish").then(i=>console.log(i));
console.log();
*/

/*
const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("data loaded successfull!");
        }else{
            reject("someting went wrong")
        }
    },1000)
});
promise.then(result=>console.log(result))
.catch(result=>console.log(Error));
*/
/*
const promise=new Promise((resolve)=>{
    resolve("manish");
});
promise.then(i=>console.log(i));


console.log("done");
*/

/*
const tryingpromise=new Promise((xz)=>{
    setTimeout(()=>xz("ccsccsc"),1000)
})
tryingpromise.then(i=>console.log(i));
*/

/*const promise=new Promise((resolve,reject)=>{
    resolve("resolved");
    reject("rejected");
});

function res(i){console.log(i,j)}
function rej(i){console.warn(i)}

// promise.then(i=>console.log(i,j)).catch(i=>console.warn(i));
promise.then(res).catch(rej);
*/

/*const p=Promise.resolve(1);
p.then(i=>console.log(i))
*/

const x=Promise.resolve(1);
const y=Promise.resolve(2);
const z=Promise.resolve(3);
// const z=Promise.reject(3);

const p=[x,y,z];
// console.log(p);
// Promise.all(p).then(i=>console.log(i)).catch(e=>console.warn(e));
// Promise.allSettled(p).then(i=>console.log(i)).catch(e=>console.warn(e));
// Promise.any(p).then(i=>console.log(i)).catch(e=>console.warn(e));
// Promise.race(p).then(i=>console.log(i)).catch(e=>console.warn(e));

// function showResult(){
//     return Promise.resolve(1);
// }


// showResult().then(i=>console.log(i)).catch(e=>console.warn(e));

/*async function runAsync(){
    console.log("sync");    
    const p=function(){return setTimeout(i=>console.log("hello"),1000)};
    const data =await p;
    data()
    
}
runAsync()

console.log("done");*/

async function runAsync(){
    console.log("API called");
    const res= fetch  ("data.txt"); 
    const data=await res.then(i=>console.log() )
}

runAsync()
