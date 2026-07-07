// document.querySelector(".print").onclick=function(){print()};
// document.querySelector(".print").onclick=function(){console.log(1)};
// document.querySelector(".print").addEventListener("click",function(){console.log(1)})

// document.querySelector("h1").addEventListener("click",function(){
//     document.querySelector(".print").click();})

/*document.querySelector(".check").addEventListener('click',function(e){
    e.preventDefault();
    console.log(this);    
})*/

/*window.addEventListener("contextmenu", function(e){
    e.preventDefault();
    this.alert("right click not allowed");
})*/

/*document.querySelector('input[type="range"]').addEventListener("input",function(e){
    this.nextElementSibling.innerHTML=this.value;
})*/

// console.log(document.querySelector('select').selectedIndex);

/*document.querySelector("h1").addEventListener("mouseover",function(){console.log("mousein")})
document.querySelector("h1").addEventListener("mouseover",function(){console.log("mouseout")})*/

/*window.addEventListener("mouseover",function(e){
    console.log(e.pageX,e.pageY);
    if(e.pageX >= 180 && e.pageX <= 190){
        document.querySelector("body").style.backgroundColor = "red";
    }else{
        document.querySelector("body").style.backgroundColor = "blue";
    }    
});*/

/*
document.login.addEventListener("submit",function(e){
    if (this.name.value.trim()===''){
        e.preventDefault();
        this.msg.innerHTML="enter name";
        this.name.focus();
    }
})
*/
/*document.login.addEventListener("reset",function(e){
    const cons=window.confirm("do you want to reset");
    if(cons==false){e.preventDefault()}
})*/

/*window.addEventListener("scroll", function(e){
    console.log(this.scrollX,this.scrollY);
    if(scrollY===100){
        document.body.style.backgroundColor = "red";
    }else{
        document.body.style.backgroundColor = "white";
    }
    
})*/


document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM content Loaded");    
})

1:18