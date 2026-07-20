"use strict";
let cars = '["swift","BMW"]';     //JSON String
const car = { 'name': "swift", 'power': 90 };
// console.log(car);
cars = JSON.parse(cars);
// car=JSON.parse(car);
// console.log(cars);
// console.log(car);
let j = JSON.stringify({ name: "avi", id: 22 });
console.log(j);
let k = JSON.stringify(["a", "b"]);
console.log(k);

const Json_data = [
    { "name": "swift", "type": "hatchback", "price": 810000 },
    { "name": "dzire", "type": "hatchback", "price": 880000 },
    { "name": "ciaz", "type": "sedan", "price": 1080000 },
    { "name": "baleno", "type": "hatchback", "price": 850000 },
    { "name": "brezza", "type": "suv", "price": 990000 },
    { "name": "grand vitara", "type": "suv", "price": 1990000 },
    { "name": "alto", "type": "hatchback", "price": 400000 },
    { "name": "wagon r", "type": "hatchback", "price": 500000 },
    { "name": "jimny", "type": "suv", "price": 1400000 }
]
