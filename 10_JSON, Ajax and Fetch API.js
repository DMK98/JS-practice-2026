"use strict";
let cars = '["swift","BMW"]';     //JSON String
const car = { 'name': "swift", 'power': 90 };
// console.log(car);
cars = JSON.parse(cars);
// car=JSON.parse(car);
// console.log(cars);
// console.log(car);
let j = JSON.stringify({ name: "avi", id: 22 });
// console.log(j);
let k = JSON.stringify(["a", "b"]);
// console.log(k);

/*const Json_data = [
    { "name": "swift", "type": "hatchback", "price": 810000 },
    { "name": "dzire", "type": "hatchback", "price": 880000 },
    { "name": "ciaz", "type": "sedan", "price": 1080000 },
    { "name": "baleno", "type": "hatchback", "price": 850000 },
    { "name": "brezza", "type": "suv", "price": 990000 },
    { "name": "grand vitara", "type": "suv", "price": 1990000 },
    { "name": "alto", "type": "hatchback", "price": 400000 },
    { "name": "wagon r", "type": "hatchback", "price": 500000 },
    { "name": "jimny", "type": "suv", "price": 1400000 }
];*/

/*const req = new XMLHttpRequest();
req.open("get", "data.txt");
req.send();
console.log("response is", req.response);
// console.log("response is",req.response);
req.addEventListener("load", function () {
    console.log(this.response);
});
console.log("done");*/

/*{
    const req = new XMLHttpRequest();
    req.open("get", "footer.html");
    req.send();
    req.addEventListener("load", function () {
        document.querySelector(".footer-div").innerHTML += this.response
    });
}*/
/*{
    const req = new XMLHttpRequest();
    req.open("get", "carData.json");
    req.send();
    req.addEventListener("load", function () {
        let data = this.response;
        console.log(data);
        console.log(typeof (data));
        data = JSON.parse(data);
        // console.table(data); 
        const sortPara = "type"
        data.sort((x, y) => {
            //  return x.price - y.price;
            if (x.name < y.name) {
                return -1
            } else if (x.name < y.name) {
                return 1
            };
        });
        data.forEach((element, index) => {
            // console.log(index, element);
            document.querySelector(".table tbody").innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.type}</td>
                    <td>${element.price}</td>                   
                </tr>`
        });
    });
};*/

// fetch("data.txt").then(i=>console.log(i.ok));
// fetch("data.txt").then(i=>console.log(i.status));
// console.log(fetch("data.txt"));
// fetch("data.txt").then(i=>i.text().then(i=>console.log(i)));
// fetch("data.txt").then(i=>i.text()).then(i=>console.log(i));
// fetch("footer.html").then(i=>i.text()).then(i=>console.log(i));
// fetch("test.html").then(i=>i.text()).then(i=>console.log(i));
// fetch("test.html").then(i=>i.text()).then(i=>document.querySelector(".test").innerHTML=i);
// fetch("carData.json").then(response=>response.text()).then(response=>console.log(response));
// fetch("carData.json").then(response=>response.json()).then(response=>console.table(response));
// fetch("carData.json").then(response=>response.json()).then(response=>document.querySelector(".test").innerHTML=response);
/*fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });*/

function gitHub() {
    /*fetch("https://api.github.com/users/manish").then(response=>response.json()).then(response=>console.log(response));*/
    fetch("https://api.github.com/users/manish").then(response => response.json()).then((response)=>{
        for(let i in response){
            document.querySelector("ol").innerHTML+=`<li>${i},${response[i]}</li>`
            
        }
    })
}
gitHub()

1:05:13