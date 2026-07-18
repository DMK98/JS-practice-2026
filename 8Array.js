"use strict";
const month=["Jan","Feb","Mar","Apr","may","june"];
const car= {name:"Swift",power:80,torque:110};
month.push("may");

// console.log(month);
// month.length=3;
// console.log("month count :",month.length);
// console.log(car);

// console.log([]===[]); //false due to reference memory allocation 
// console.log(typeof(month) );
// console.log(typeof month );
// console.log(Array.isArray(month));
// console.log(month[1]);
// console.log([month.length-1]);
// console.log(month.at(3));
// console.log(month.at(-1));
// console.log(month.at(-2));
// month.sort();
// console.log(month);

// const number=[2,4,5,6,7,1,3];
// console.log(number);
// number.sort()
// console.log(number);
// const number2=[2,4,5,6,7,1,11,13,12,22,55];
// console.log(number2);
// number2.sort()
// console.log(number2);
// console.log(number2);

// number2.sort((x,y)=>x-y)

// console.log(number2.toSorted((x,y)=>x-y));
// console.log(number2);
// console.log(month.reverse());
// console.log(month.toReversed());
// console.log(month);
// console.log(month);
// month.shift();
// console.log(month);
// month.unshift("ABC");
// console.log(month);

// month.pop()
// console.log(month);
// month.push("ABC");
// console.log(month);

// month.splice(1,2,"FEB","MAR")
// console.log(month);
// let newMonth=month.slice()
// newMonth.push("ABCpushed")
// console.log(newMonth);
// console.log(month);

// console.log(month.join(", "));
// console.log(month.reverse());

// const week=["Sun","Mon","Tue","wed"];
// console.log(week.concat(month));


// const number3=[1,2,3,4,5,6,[7,8,9]];
// const number4=[1,2,3,4,5,6,[7,8,9],[10,11,12]];
// console.log(number3);
// console.log(number3.flat());
// console.log(number4)
// console.log(number4.flat(2));


// const number5=[1,2,3,4,5,6,7,8,9];

// const t=number5.map(i=>i+1);
// console.log(t);

// const t=number5.map((i)=>{console.log(i)})
// number5.forEach((i)=>{console.log(i*2)})

// let y=number5.reduce((x,y)=>x+y);
// console.log(y);

// const z=number5.filter(i=>i%2===0);
// console.log(z);
// const z=number5.filter((i)=>{return i%2===0});
// console.log(z);


// const z= number5.find(i=>i%2==0)
// console.log(z);
// const z= number5.findIndex(i=>i%2==0)
// console.log(z);
// const number5=[1,2,3,4,5,6,7,8,9];
// const t=number5.fill(0)
// const t=number5.fill(0,4)
// const t=number5.fill(0,2,5)
// console.log(t);
// const t=number5.some(i=>i%2==0);
// console.log(t);
// const t=number5.every(i=>i%2==0);
// console.log(t);

/*let str="abcd";
let pics=document.querySelectorAll("img");
console.log(str);
str=Array.from(str)
pics=Array.from(pics);
console.log(Array.isArray(pics));
console.log(Array.isArray(str));*/

const number5=[1,2,3,4,5,6,7,8,9];
/*number5.forEach((a, b)=>{
    console.log(b,a );    
});*/

/*for(let i in number5){
    console.log(number5[i]);    
}*/


/*for(let i of number5){
    console.log(i);    
}*/

/*number5.map((a,b)=>{
    console.log(b,a);    
})*/

/*for(let i=0,j=i<=month.length;i<=j;i++){
       console.log(month[i]);        
}*/
/*number5.forEach(i=>{
    document.querySelector("ol").innerHTML+=`<li>${i}</li>`
});*/

/*month.forEach((ind,i)=>{
    document.querySelector("select").innerHTML+=`<option>${i+1}${ind}</option>`
});*/


const data=[
    // ["a1","a2","a3"],
    ["a1","a2","a3","a4"],
    ["b1","b2","b3","b5"],
    ["c1","c2","c3","c5"],
]

data.forEach(i => {
    const tr=document.createElement("tr");
    console.log(i);
    i.forEach(j=>{
        console.log(j);
        tr.innerHTML+=`<td>${j}</td>`
        
    })    
    document.querySelector("table").appendChild(tr);    
});






