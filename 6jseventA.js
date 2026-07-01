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

window.addEventListener("mouseover",function(e){
    console.log(e.pageX,e.pageY);
    if(e.pageX ||e.pageY ){

    }
    
})
