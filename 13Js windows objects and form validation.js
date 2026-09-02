"use strict"
/*window.onload=function(){
    alert("hello")
}*/

// document.addEventListener("DOMContentLoaded",alert("ffa"));

/*document.querySelector(".open").addEventListener("click",function(){
    window.open("./4.html","_blank","width=400 height=400")
})*/

// console.log(location.href);
// console.log(location.origin);
// console.log(location.host);
// console.log(location.hostname);


// const str="lorem ipsum1";
// const p=/\S/i;
// const p=/\s/;
// const p=/\d/;

// console.log(p.test(str));

// ============NUMber============
document.querySelector(".pincode").addEventListener("input", function () {
    const x = this.value;
    const p = /^[1-9]{6}$/;
    if (p.test(x)) {
        document.querySelector(".ans").innerHTML = "match"
    } else {
        document.querySelector(".ans").innerHTML = "not match"
    }
})
// ============Email============
document.querySelector(".email").addEventListener("input", function () {
    const x = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
    //  const emailRegex = /^[\w]{1}\@\.$/;
    if (emailRegex.test(x)) {
        document.querySelector(".emailAns").innerHTML = "match"
    } else {
        document.querySelector(".emailAns").innerHTML = "not match"
    }
})
// ============password============
document.querySelector(".password").addEventListener("input", function () {
    const x = this.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-.])(?=.{8,12})/;
    if (passwordRegex.test(x)) {
        document.querySelector(".passwordAns").innerHTML = "match"
    } else {
        document.querySelector(".passwordAns").innerHTML = "not match"
    }
})

// ===================Sigup=======================
document.signup.addEventListener("submit", function (e) {
    this.name.nextElementSibling.innerHTML = "";
    this.age.nextElementSibling.innerHTML = "";
    let nameCheck=/^[a-zA-Z]+$/;
    if (this.name.value.trim() == "" || !nameCheck.test(this.name.value)   ) {
        e.preventDefault();
        this.name.nextElementSibling.innerHTML = "Enter name";
        this.name.nextElementSibling.style = "color:red";
        this.name.focus();
    } else if (this.age.value.trim() == "") {
        e.preventDefault();
        this.age.nextElementSibling.innerHTML = "Enter  age";
        this.age.nextElementSibling.style = "color:orange";
        this.age.focus();
    } else if (this.age.value < 18 || this.age.value > 25) {
        e.preventDefault();
        this.age.nextElementSibling.innerHTML = "Enter valid age";
        this.age.nextElementSibling.style = "color:red";
        this.age.focus();
    } else if (this.resume.value == "") {
        e.preventDefault();
        this.resume.nextElementSibling.innerHTML = "Upload resume";
        this.resume.nextElementSibling.style = "color:red";
        this.resume.focus();
    } else if (this.resume.files[0].size > 1048576) {
         e.preventDefault();
        this.resume.nextElementSibling.innerHTML = "resume file size exceed";
        this.resume.nextElementSibling.style = "color:red";
        this.resume.focus();
    }
})