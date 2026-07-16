"use strict"
let i = 11;
/*if(i<10){
    console.log(i);    
}*/

/*console.time("t");
while(i<10){
    // i++;
    // ++i;
    console.log(i);    
    ++i;
}
console.timeEnd("t");*/

/*do{
    console.log(i++);    
}while(i<10)*/


/*for(;i<=10; i++){
    console.log(i);    
}*/

/*for(let t=2;t<=20; t=t+2){
    console.log(t);    
}*/

/*let count = 0
for (let i = 1; i <= 100; i = i + i) {
    console.log(i);
    count++;
}
console.log("iteration count >>",count);*/

/*for (let i = 1; i < 100; i++) {
    if (i % 23 === 0) {
        console.log(i);
        break;
    }
}*/

/*for(let i =1; i<=100;i++){
    if(i%10===0){continue};
    console.log(i);    
}*/

/*for(let i=1;i<=5;i++ ){
    document.querySelector("main ol").innerHTML+="<li>List item</li>";
}*/


/*console.time("t");
let option = ""
for (let i = 1; i <= 10; i++) {
    // document.querySelector(".year").innerHTML+=`<option>${i}</option>`;
    option += `<option>${i}</option>`
}
document.querySelector(".year").innerHTML += option
console.timeEnd("t");*/


/*for (let i = 1; i < 10; i++) {
    // console.log(i);    
    for (let j = 1; j <= 5; j++) {
        // console.log(i);            
        // console.log(i*j);            
        console.log(i);            
        console.log(j);            
    }
    console.log("------------");    
}*/

/*for(let i=1;i<=10;i++){
let tr=document.createElement("tr");
    for(let j=1;j<=10;j++){
        tr.innerHTML+=`<td>${i*j}</td>`
    }
    document.querySelector("table").appendChild(tr)
}*/


// for(let i=1;i<=5;i++){
/*let count=0;
for(let i=1;i<=5;i=i+1){
// let row=document.createElement("div");
// row.classList.add("row");
    // for(let j=i;j<=5;j++){
    // for(let j=i;j<=5;j++){
    // for(let j=i;j<=10+1-i;j++){
    for(let j=1;j<=i;j++){
        // row.innerHTML+=`<div class="col">${i*j}</div>`
        // row.innerHTML+=`<div class="col">${"*"}</div>`
        // row.innerHTML+=`<div class="col">${j}</div>`;
        // row.innerHTML+=`<div class="col">${j}</div>`;
        // row.innerHTML+='<div class="col">*</div>';
        // count++;
    }
//     console.log("-------------");        
//     document.querySelector(".pattern").appendChild(row);
// }
// console.log("countis ::",count);
*/


/*const str=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam voluptatum delectus neque quam quibusdam aut obcaecati harum porro illum."*/
// console.log(str.length);

/*const l=str.length;
let counter=0;
for(let i=0;i<=l;i++){
    // console.log(str);
    if(str[i]==" "){counter++}    
}
console.log(counter);*/

const str=document.querySelector(".str").textContent;
const l=str.length;
let counter=0;
for(let i=0;i<=l;i++){
    // console.log(str);
    if(str[i]==" "){counter++}    
}
console.log(counter);
console.log(counter + 1);

