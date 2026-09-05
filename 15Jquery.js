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
/*$(".btn1").click(function(){
    // console.log($(this).text()); 
    // let click=$(".btn").click;
    // console.log(click);
    $(".opt1").text($(".btn1").text())
});
$(".btn2").click(function(){
    // console.log($(this).text()); 
    // let click=$(".btn").click;
    // console.log(click);
    $(".opt2").text($(".btn2").text())
});
$(".btn3").click(function(){
    // console.log($(this).text()); 
    // let click=$(".btn").click;
    // console.log(click);
    $(".opt3").text($(".btn3").text())
});*/

/*$(".btn1, .btn2, .btn3").toArray().forEach(function(button, index) {

    $(button).click(function() {

        $(".opt" + (index + 1)).text($(button).text());

    });

});*/

/*let buttons = $(".btn1, .btn2, .btn3");
for(let button of buttons){
    $(button).click(function(){
        $(this).next("output").text($(this).text());
    });
};*/


$(".btn1, .btn2, .btn3").each(function() {
    $(this).click(function() {
        $(this).next("output").text($(this).text());
    });
});

$("input").on("input", function () {
    $(".input").text(this.value)
});

$(".hide").on("click",function(){
    // $(".box").hide("slow")
    $(".box").slideUp("slow")
    // $(".box").hide("slow")
});


$(".show").on("click",function(){
    // $(".box").show("slow")
  $(".box").slideDown("slow")
    // $(".box").show("slow")
});

$(".toogle").on("click",function(){
    // $(".box").toggle("slow")
    $(".box").fadeToggle("slow")
});

$(".collapse a").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next("p").slideToggle();;
});
$(".heading3").click(function(){
    $(".faq").fadeToggle("slow");
})
