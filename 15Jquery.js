"use strict"

/*document.querySelector("input").addEventListener("input",function(){
    this.nextElementSibling.innerHTML=this.value;
})*/

// console.log(jQuery.fn.jquery);
// console.log($);
// console.log(jQuery);
// $(".message");
// document.querySelector(".message").textContent = "Welcome";

// $("p").text("Welcome");
// $("p").text("manish")
// let x=$(".message").text()
// console.log(x);
// $(".message").text("welcome");
// $("#heading").text("Welcome Buddy");


// let z=$(".message").text();
// also tell me below line will this work
/*$(".btn").click(function(){
    $(".message").text("welcome");
    $("#heading").text("Welcome buddy")
})*/

/*$("#btn").click(function(){
    $("#message").text("Welcome");
})*/

/*console.log(1);
$(function(){console.log(2)});
console.log(3);*/

/*console.log("A");
function abc(){
    console.log("B");    
}
console.log("C");
abc()*/

/*$(function(){console.log("D")});*/
/*$("h3").append(3+2);*/

/*$(function(){
    $("input").on("input",function(){
        $(this).next().text($(this).val())
    })
})*/

$(".btn").click(function(){
    console.log($(this).text());
    
})