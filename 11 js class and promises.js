// const x= new Array();
// const y=new Object();

/*function Car(name,power,torque,price){
    this.name=name;
    this.power=power;
    this.torque=torque;
    this.price=price;
}*/

// const swift=new Car("swift",90,5000);
// const alto= new Car("alto",66,50,400000);

// Car.id=22;
// Car.prototype.id=22;

// swift.power=50;
// alto.power=60;
// for(let i in swift){console.log(i)};
// console.log(swift.hasOwnProperty('id'));


// chat gpt 
/*const swift={
    name:"swift",
    price:8000,
    start(){
        console.log("car started");        
    }
};
console.log(swift);

class Car{

}*/

/*class Car{
    constructor(name){
        this.name=name;
    }
}

const swift =new Car("swift");
console.log(swift);*/

/*class Car{
    constructor(){
        console.log("object created");        
    }
}
const swift = new Car();*/

/*class Fruit{
    constructor(){
        console.log("fruit created");        
    }
}
const apple=new Fruit();*/

/*class Car{
    constructor(){
        console.log("constructor");        
    }
}
const a= new Car()
const b= new Car()*/

/*class Student{
    constructor(name){
        this.name=name;
    }
}
const i=new Student("ram");
console.log(i);*/

/*class Car{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    star
}
const swift=new Car("swift", 8000);
console.log(swift);*/

/*class Car{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    star(){
        console.log(`${this}`);
        
    }
}
const swift=new Car("swift", 8000);
console.log(swift);*/

/*class Car{
    constructor(name,price){
            this.name=name;
            this.price=price;
    }
    start(){

    }
}*/

// class Car{
//     constructor(name,power,torque, price){
//         this.name=name;
//         this.torque=torque;
//         this.torque=torque;
//         this.price=price;
//     }
// };
// const swift = new Car("alto", 40,50,100000);


// class declaration
/*class Car {
    constructor(power, torque) {
        this.power = power;
        this.torque = torque
    }
};
const swift = new Car(90, 115)
console.log(swift);*/

// Class expression
/*const Car = class {
    constructor(power, torque) {
        this.power = power;
        this.torque=torque;
    }
    start(){return this.name + "start"}

};*/
// const maruti=new Car(50,250)
// console.log(maruti);
// console.log(Car());

class Car {
    x=50;
    #z=100;

    constructor(name, power, torque, price) {
        this.name = name;
        this.power = power;
        this.torque = torque;
        this.price = price;
    }
    start(){return this.name+"starts"}
    checkPrivate(){
        return this.#z
    }
    
};

const swift = new Car("alto", 40, 50, 100000);
console.log(swift);

class Suzuki extends Car {
    w=2;
    constructor(name, power, torque, price) {
        super(name, power, torque, price);
    }
}
class Toyota extends Car {
    w=3;
    constructor(name, power, torque, price) {
        super(name, power, torque, price);
    }
}

const nexa= new Suzuki("nexa",100,80,100000);
const breza= new Suzuki("breza",200,160,200000);
const fortuner= new Toyota("fortuner",300,240,300000);
console.log(fortuner);
console.log(breza);
console.log(nexa);

setTimeout(()=>{
    console.log("hello");
    
},1000);

console.log("End Done ");
