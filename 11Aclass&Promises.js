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
document.body.addEventListener("click",function(){console.log(this)});
console.log("done");
