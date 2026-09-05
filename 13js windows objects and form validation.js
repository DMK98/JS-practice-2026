"use strict"
window.onload
/*document.addEventListener("DOMContentLoaded",function(){
    console.log("loaded");    
});*/
/*window.addEventListener("click",function(e){
    console.log(e.target);
    
})*/
// console.log(innerWidth);
// console.log(innerHeight);
/*document.querySelector(".btn").addEventListener("click",function(){
   window.open("./open.html","_blank","width=600 height=400" ) 
})*/
// console.log(location.href);
console.log(("-------------------"));

// console.log(location.origin);
// console.log(location.hostname);
// console.log(location.hash);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(navigator.onLine);
// console.log(navigator.deviceMemory);
// console.log(navigator.mediaDevices);

/*const openCamera = document.querySelector(".camera");
openCamera.addEventListener("click", () => {
    
    const video = document.querySelector("video");
    const constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        video.srcObject = mediaStream;
        video.play();
    }).catch(err => console.warn(err));

})*/


// const constraints={audio:false, video:true};
// navigator.mediaDevices.getUserMedia(constraints).then((mediaStream)=>{
//     video.srcObject=mediaStream;
//     video.play();
// }).catch(err=>console.warn(err));
// console.log(navigator.platform);
// console.log(navigator.onLine);

/*const word = "manishk9";
let hasNumber = false;*/
/*let count=0
for(let i of word){
    if (i>=0 && i<=9){
        console.log(i,"number")        
    }else{
        console.log(i,"string");        
    }
}*/
// console.log(count);

/* for (let i of word) {
    if (i >= 0 && i <= 9) {
        hasNumber = true;
    }
}
console.log(hasNumber);*/

/*const searchButton = document.querySelector(".btn_search")
const enteredPin = document.querySelector(".pinEntered");
searchButton.addEventListener("click", (e) => {
    let pin = document.querySelector(".input").value;
    
    console.log(pin);
    e.preventDefault();
    // if (pin >= 0 && pin <= 9) {
    if (pin ==="/^/d{6}$/") {
        enteredPin.innerText = `you have search for ${pin}`;
    } else {
        enteredPin.innerHTML = `<b>wrong pin ${pin} </b>`;
    }
    // enteredPin.innerText = `you have search for ${pin}`;

})*/

const str = "loremipSum";
// const p=/ /;
// const p=/\s/;
// const p=/s/;
// const p=/z/;
// const p=/s/i;
/*const p=/\d{3}/;
console.log(p.test(str));
console.log(p.exec(str));
let x;
let z;
for(let i of str){
    if(i>=0 && i<=9){
        z="digit available"
        // console.log("digit available");        
    }else{
        // console.log("digit not available");
        // x="digit not available"
        
    }
}
console.log(z);
// console.log(x);*/
/*const pincode = document.querySelector(".pincode");
const btn_check_pin = document.querySelector(".pin_check");
const mobNumber = document.querySelector(".mob_number");
const mob_number_check_btn = document.querySelector(".mob_number_check");
const mob_output = document.querySelector(".mob_number_output");
btn_check_pin.addEventListener("click", function (e) {
    // e.preventDefault()
    let x = pincode.value;
    console.log(x);
    const check_pin_pattern = /^[1-9]\d{5}$/;
    // console.log(check_pin_pattern.test(x))
    if (check_pin_pattern.test(x) === true) {
        document.querySelector(".pincode_output").innerText = pincode.value;
        console.log("mk");
    } else {
        document.querySelector(".pincode_output").innerText = "incorrect pin";
    }
});
mob_number_check_btn.addEventListener("click", function () {
    let y = mobNumber.value;
    console.log(y);
    const check_mobile_pattern = /^[6-9]\d{9}$/;
    console.log(check_mobile_pattern.test(y));
    if(check_mobile_pattern.test(y)){
        mob_output.innerText = y;
    }else{
        mob_output.innerText = "incorrect mobile no";
    }
})*/

const e_mail = document.querySelector(".email");
const pincode = document.querySelector(".pincode");
const submit_btn = document.querySelector(".submit-btn");

submit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let pin = pincode.value;
    let email = e_mail.value
    console.log(email);
    const email_pattern_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const email_pattern_check=/^@\./i;
    const pin_pattern_check = /^[1-9]\d{5}$/;
    if (email === "") {
        alert("email not enterd");
    } else if (email_pattern_check.test(email)) {
        console.log(email);
    } else {
        alert("incorrect email");
    }
    if (pin === "") {
        alert("Pin not enterd");
        
    } else if (pin_pattern_check.test(pin)) {
        console.log(pin);
    } else {
        alert("incorrect pin");
    }

});





